import os
import sys
import re
import json
import time
import asyncio
import threading
import numpy as np
from collections import deque
from datetime import datetime

import sherpa_onnx
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    try:
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# ==============================================================================
# 1. KHỞI TẠO FASTAPI VÀ CẤU HÌNH CORS
# ==============================================================================
app = FastAPI(title="Sherpa-ONNX Local Speech STT Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==============================================================================
# 2. PATH CONFIG & AUTO DETECT ONNX MODEL
# ==============================================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def find_sherpa_onnx_paths(base_dir: str):
    search_dirs = [
        os.path.join(base_dir, "models"),
        base_dir,
        os.path.abspath(os.path.join(base_dir, "..", "..", "..", "..", "..", "..", "stt_project")),
    ]

    for p in search_dirs:
        if os.path.isdir(p):
            for root, dirs, files in os.walk(p):
                if "tokens.txt" in files and any(f.endswith(".onnx") for f in files):
                    encoder = decoder = joiner = tokens = None
                    for f in files:
                        path = os.path.join(root, f)
                        if f == "tokens.txt":
                            tokens = path
                        elif f.startswith("encoder") and f.endswith(".onnx"):
                            encoder = path
                        elif f.startswith("decoder") and f.endswith(".onnx"):
                            decoder = path
                        elif f.startswith("joiner") and f.endswith(".onnx"):
                            joiner = path
                    if encoder and decoder and joiner and tokens:
                        return root, encoder, decoder, joiner, tokens
    return "", None, None, None, None

MODEL_DIR, ENCODER_PATH, DECODER_PATH, JOINER_PATH, TOKENS_PATH = find_sherpa_onnx_paths(BASE_DIR)

# ==============================================================================
# 3. AUDIO CONFIG (GIỐNG HỆT SHERPAONNX.PY)
# ==============================================================================
SAMPLE_RATE = 16000

MIN_DECODE_SECONDS = 0.3
MAX_WINDOW_SECONDS = 6.0
STEP_SECONDS = 0.25
RING_BUFFER_SECONDS = 12

MIN_DECODE_SAMPLES = int(SAMPLE_RATE * MIN_DECODE_SECONDS)
MAX_WINDOW_SAMPLES = int(SAMPLE_RATE * MAX_WINDOW_SECONDS)
RING_BUFFER_SAMPLES = int(SAMPLE_RATE * RING_BUFFER_SECONDS)

SILENCE_SECONDS_TO_COMMIT = 0.7

VAD_THRESHOLD = 0.30
RMS_FALLBACK_THRESHOLD = 0.006
NOISE_FILLER_WORDS = {"ừ", "à", "uh", "ừm", "ơ", "ư", "hà", "hử", "ê", "ha", "hm", "hmm"}
MIN_TEXT_LENGTH = 1

# ==============================================================================
# 4. TEXT & AUDIO UTILS
# ==============================================================================
def clean_text(text: str) -> str:
    text = str(text).strip().lower()
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r",{2,}", ",", text)
    text = re.sub(r"\.{2,}", ".", text)
    text = re.sub(r"\s+([,.!?])", r"\1", text)
    text = re.sub(r"([,.!?])([^\s])", r"\1 \2", text)
    text = re.sub(r"[.,!?;:]+$", "", text)
    return text.strip()

def is_bad_text(text: str) -> bool:
    clean = text.lower().strip()
    if len(clean) < MIN_TEXT_LENGTH:
        return True
    if clean in NOISE_FILLER_WORDS:
        return True
    return False

def pcm_bytes_to_float32(audio_bytes: bytes) -> np.ndarray:
    audio = np.frombuffer(audio_bytes, dtype=np.int16)
    if audio.size == 0:
        return np.array([], dtype=np.float32)
    return audio.astype(np.float32) / 32768.0

def rms_value(audio: np.ndarray) -> float:
    if audio.size == 0:
        return 0.0
    return float(np.sqrt(np.mean(audio ** 2)))

# ==============================================================================
# 5. VAD (VOICE ACTIVITY DETECTION) WITH RMS FALLBACK
# ==============================================================================
class SileroVAD:
    def __init__(self):
        self.available = False
        self.model = None
        self.get_speech_timestamps = None

        # Thử nạp PyTorch Silero VAD nếu có
        try:
            import torch
            silero_dir = os.path.join(os.path.dirname(MODEL_DIR or BASE_DIR), "vad")
            if os.path.exists(silero_dir):
                self.model, utils = torch.hub.load(
                    repo_or_dir=silero_dir,
                    model="silero_vad",
                    source="local",
                )
                self.get_speech_timestamps = utils[0]
                self.available = True
                print("✅ Silero VAD local OK")
        except Exception:
            self.available = False
            print("ℹ️ Dùng RMS VAD Fallback (Threshold = 0.006)")

    def is_speech(self, audio: np.ndarray) -> bool:
        if audio.size == 0:
            return False

        rms = rms_value(audio)
        if rms < RMS_FALLBACK_THRESHOLD:
            return False

        if not self.available:
            return rms >= RMS_FALLBACK_THRESHOLD

        try:
            import torch
            tensor = torch.from_numpy(audio.astype(np.float32))
            timestamps = self.get_speech_timestamps(
                tensor,
                self.model,
                sampling_rate=SAMPLE_RATE,
                threshold=VAD_THRESHOLD,
                min_speech_duration_ms=200,
                min_silence_duration_ms=150,
            )
            return len(timestamps) > 0
        except Exception:
            return rms >= RMS_FALLBACK_THRESHOLD

VAD = SileroVAD()

# ==============================================================================
# 6. AUDIO RING BUFFER
# ==============================================================================
class AudioRingBuffer:
    def __init__(self, max_samples: int):
        self.max_samples = max_samples
        self.buffer = []
        self.total_samples = 0
        self.lock = threading.Lock()

    def append(self, audio: np.ndarray):
        if audio.size == 0:
            return
        audio = audio.astype(np.float32, copy=False)
        with self.lock:
            self.buffer.append(audio)
            self.total_samples += audio.size
            while self.total_samples > self.max_samples and self.buffer:
                removed = self.buffer.pop(0)
                self.total_samples -= removed.size

    def get_audio(self) -> np.ndarray:
        with self.lock:
            if not self.buffer:
                return np.array([], dtype=np.float32)
            return np.concatenate(self.buffer).astype(np.float32, copy=False)

    def clear(self):
        with self.lock:
            self.buffer.clear()
            self.total_samples = 0

    def size(self) -> int:
        with self.lock:
            return self.total_samples

# ==============================================================================
# 7. SHERPA-ONNX ENGINE
# ==============================================================================
class SherpaONNXEngine:
    def __init__(self):
        if not ENCODER_PATH:
            raise FileNotFoundError("Không tìm thấy các file mô hình Sherpa-ONNX zipformer")

        cpu_threads = max(1, min(4, os.cpu_count() or 4))
        print(f"🔍 Đang nạp Sherpa-ONNX Recognizer từ: {MODEL_DIR}")

        if hasattr(sherpa_onnx, "OfflineRecognizer") and hasattr(sherpa_onnx.OfflineRecognizer, "from_transducer"):
            self.recognizer = sherpa_onnx.OfflineRecognizer.from_transducer(
                encoder=ENCODER_PATH,
                decoder=DECODER_PATH,
                joiner=JOINER_PATH,
                tokens=TOKENS_PATH,
                num_threads=cpu_threads,
                sample_rate=SAMPLE_RATE,
                feature_dim=80,
                decoding_method="greedy_search",
            )
        elif hasattr(sherpa_onnx.OnlineRecognizer, "from_transducer"):
            self.recognizer = sherpa_onnx.OnlineRecognizer.from_transducer(
                encoder=ENCODER_PATH,
                decoder=DECODER_PATH,
                joiner=JOINER_PATH,
                tokens=TOKENS_PATH,
                num_threads=cpu_threads,
                sample_rate=SAMPLE_RATE,
                feature_dim=80,
                decoding_method="greedy_search",
            )
        else:
            raise AttributeError("Không hỗ trợ phiên bản sherpa-onnx hiện tại")

        print("✅ Sherpa-ONNX Engine sẵn sàng!")

    def transcribe(self, audio: np.ndarray) -> str:
        if audio.size < MIN_DECODE_SAMPLES:
            return ""

        try:
            stream = self.recognizer.create_stream()
            stream.accept_waveform(SAMPLE_RATE, audio)
            self.recognizer.decode_stream(stream)

            if hasattr(stream, "result"):
                res = stream.result
                raw_text = res.text if hasattr(res, "text") else str(res)
            else:
                res = self.recognizer.get_result(stream)
                raw_text = res.text if hasattr(res, "text") else str(res)

            text = clean_text(raw_text)
            if is_bad_text(text):
                return ""

            return text
        except Exception as e:
            print(f"⚠️ Lỗi transcribe: {e}")
            return ""

ENGINE = None

def init_engine():
    global ENGINE
    try:
        ENGINE = SherpaONNXEngine()
    except Exception as e:
        print(f"❌ Không thể nạp mô hình: {e}")

# ==============================================================================
# 8. SPEECH SESSION (ĐÚNG LOGIC SHERPAONNX.PY)
# ==============================================================================
class SpeechSession:
    def __init__(self, websocket: WebSocket, loop: asyncio.AbstractEventLoop):
        self.websocket = websocket
        self.loop = loop

        self.audio_buffer = AudioRingBuffer(RING_BUFFER_SAMPLES)
        self.preroll_buffer = deque(maxlen=20) # ~400ms lead-in buffer

        self.running = True
        self.last_decode_time = 0.0

        self.current_text = ""
        self.last_sent_text = ""

        self.last_voice_time = time.time()
        self.has_current_voice = False

        self.worker_thread = threading.Thread(
            target=self.worker_loop,
            daemon=True,
        )

    def start(self):
        self.worker_thread.start()

    def stop(self):
        self.running = False

    def add_audio(self, audio: np.ndarray) -> bool:
        if audio.size == 0:
            return False

        is_voice = VAD.is_speech(audio)
        self.preroll_buffer.append(audio)

        if is_voice:
            self.last_voice_time = time.time()
            if not self.has_current_voice:
                self.has_current_voice = True
                while self.preroll_buffer:
                    chunk = self.preroll_buffer.popleft()
                    self.audio_buffer.append(chunk)
            else:
                self.audio_buffer.append(audio)
            return True
        elif self.has_current_voice:
            self.audio_buffer.append(audio)
            return True

        return False

    async def safe_send(self, data: dict):
        try:
            await self.websocket.send_json(data)
        except Exception:
            self.running = False

    def send_from_thread(self, data: dict):
        if not self.running:
            return
        future = asyncio.run_coroutine_threadsafe(
            self.safe_send(data),
            self.loop,
        )
        try:
            future.result(timeout=2)
        except Exception:
            self.running = False

    def worker_loop(self):
        self.send_from_thread({
            "type": "status",
            "text": "Đã sẵn sàng nhận giọng nói (Sherpa-ONNX)"
        })

        while self.running:
            now = time.time()

            if self.has_current_voice:
                silence_time = now - self.last_voice_time
                if silence_time >= SILENCE_SECONDS_TO_COMMIT:
                    if self.current_text:
                        print(f"🗣️ [CHỐT CÂU]: {self.current_text}")
                        self.send_from_thread({
                            "type": "commit",
                            "text": self.current_text,
                        })
                        self.send_from_thread({
                            "type": "append",
                            "text": self.current_text,
                        })

                    self.has_current_voice = False
                    self.current_text = ""
                    self.last_sent_text = ""
                    self.audio_buffer.clear()

                    self.send_from_thread({
                        "type": "status",
                        "text": "Đã tạm dừng, chờ câu tiếp theo"
                    })
                    time.sleep(0.05)
                    continue

            if now - self.last_decode_time < STEP_SECONDS:
                time.sleep(0.02)
                continue

            self.last_decode_time = now
            size = self.audio_buffer.size()

            if size < MIN_DECODE_SAMPLES:
                continue

            audio = self.audio_buffer.get_audio()
            if audio.size > MAX_WINDOW_SAMPLES:
                audio = audio[-MAX_WINDOW_SAMPLES:]

            if audio.size < MIN_DECODE_SAMPLES:
                continue

            if ENGINE is None:
                continue

            text = ENGINE.transcribe(audio)

            if not text:
                continue

            self.current_text = text
            if text != self.last_sent_text:
                self.last_sent_text = text
                self.send_from_thread({
                    "type": "replace",
                    "text": text,
                })
                self.send_from_thread({
                    "type": "partial",
                    "text": text,
                })

            self.send_from_thread({
                "type": "status",
                "text": "Đang nghe realtime (Sherpa-ONNX)..."
            })

# ==============================================================================
# 9. WEBSOCKET ENDPOINT
# ==============================================================================
@app.websocket("/ws/speech")
async def speech_websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("🔌 Client Frontend đã kết nối WebSocket STT.")

    if ENGINE is None:
        await websocket.send_json({
            "type": "error",
            "text": "Server chưa nạp thành công mô hình AI STT (Sherpa-ONNX)."
        })
        await websocket.close()
        return

    loop = asyncio.get_running_loop()
    session = SpeechSession(websocket, loop)
    session.start()

    try:
        await websocket.send_json({
            "type": "status",
            "text": "Đã kết nối server Sherpa-ONNX local"
        })

        while session.running:
            message = await websocket.receive()

            if "bytes" in message and message["bytes"]:
                data = message["bytes"]
                audio = pcm_bytes_to_float32(data)
                if audio.size > 0:
                    was_voice = session.add_audio(audio)
                    if was_voice:
                        await websocket.send_json({"type": "voice"})

            elif "text" in message and message["text"]:
                try:
                    payload = json.loads(message["text"])
                    if payload.get("type") == "config":
                        pass
                except Exception:
                    pass

    except WebSocketDisconnect:
        print("🔌 Client đã ngắt kết nối WebSocket.")
    except Exception as e:
        print(f"⚠️ Lỗi WebSocket: {e}")
    finally:
        session.stop()
        print("🔌 Tắt session WebSocket.")

# ==============================================================================
# 10. KHỞI CHẠY SERVER
# ==============================================================================
if __name__ == "__main__":
    init_engine()
    print("🚀 Bắt đầu chạy Server STT tại http://localhost:8000 (WebSocket: ws://localhost:8000/ws/speech)")
    uvicorn.run(app, host="0.0.0.0", port=8000)
