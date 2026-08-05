import { useEffect, useRef, useState, useCallback } from "react";
import type {
  UseSpeechRecognitionOptions,
  UseSpeechRecognitionReturn,
  WsMessage,
} from "./types";
import { floatTo16BitPCM } from "./audio";

export function useSpeechRecognition({
  serverWsUrl,
  isCodeMode = false,
  onAppendText,
  onReplaceText,
  onCommitText,
  onStatus,
}: UseSpeechRecognitionOptions): UseSpeechRecognitionReturn {
  const [isListening, setIsListening] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const manualStopRef = useRef(false);
  const currentSentenceRef = useRef("");

  const callbacksRef = useRef({
    onAppendText,
    onReplaceText,
    onCommitText,
    onStatus,
    isCodeMode,
    serverWsUrl,
  });

  useEffect(() => {
    callbacksRef.current = {
      onAppendText,
      onReplaceText,
      onCommitText,
      onStatus,
      isCodeMode,
      serverWsUrl,
    };

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({ type: "config", codeMode: isCodeMode })
      );
    }
  }, [onAppendText, onReplaceText, onCommitText, onStatus, isCodeMode, serverWsUrl]);

  const stopListening = useCallback(() => {
    manualStopRef.current = true;
    setIsListening(false);

    processorRef.current?.disconnect();
    processorRef.current = null;

    sourceRef.current?.disconnect();
    sourceRef.current = null;

    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (wsRef.current) {
      const ws = wsRef.current;
      wsRef.current = null;
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    }

    callbacksRef.current.onStatus?.("Đã dừng thu âm");
  }, []);

  const startListening = useCallback(async () => {
    try {
      manualStopRef.current = false;
      setIsListening(true);

      const url = callbacksRef.current.serverWsUrl;
      const ws = new WebSocket(url);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        callbacksRef.current.onStatus?.("WebSocket đã kết nối");
        ws.send(
          JSON.stringify({
            type: "config",
            codeMode: callbacksRef.current.isCodeMode,
          })
        );
      };

      ws.onmessage = (event) => {
        try {
          const data: WsMessage = JSON.parse(event.data);
          const { onAppendText, onReplaceText, onCommitText, onStatus } =
            callbacksRef.current;

          switch (data.type) {
            case "voice":
              onStatus?.("Đang nhận diện giọng nói...");
              break;

            case "append": {
              const text = (data.text || "").trim();
              if (text) {
                currentSentenceRef.current = "";
                onAppendText?.(text);
              }
              break;
            }

            case "replace":
            case "partial":
              currentSentenceRef.current = (data.text || "").trim();
              onReplaceText?.(currentSentenceRef.current);
              break;

            case "commit":
              if (currentSentenceRef.current.trim()) {
                onCommitText?.(currentSentenceRef.current.trim());
                currentSentenceRef.current = "";
              }
              break;

            case "status":
              onStatus?.(data.text || "");
              break;

            case "error":
              manualStopRef.current = true;
              onStatus?.(data.text || "Lỗi xử lý giọng nói", "#ff4444");
              stopListening();
              break;
          }
        } catch (err) {
          console.error("Lỗi parse WS message:", err);
        }
      };

      ws.onerror = () => {
        callbacksRef.current.onStatus?.("Lỗi kết nối WebSocket STT", "#ff4444");
      };

      ws.onclose = () => {
        wsRef.current = null;
        if (!manualStopRef.current) {
          callbacksRef.current.onStatus?.("Mất kết nối WebSocket STT", "#ff9900");
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      streamRef.current = stream;

      if (manualStopRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      const audioContext = new AudioContext({ sampleRate: 16000 });
      audioContextRef.current = audioContext;

      const source = audioContext.createMediaStreamSource(stream);
      sourceRef.current = source;

      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (event) => {
        const activeWs = wsRef.current;
        if (!activeWs || activeWs.readyState !== WebSocket.OPEN) return;

        const input = event.inputBuffer.getChannelData(0);
        activeWs.send(floatTo16BitPCM(input));
      };

      source.connect(processor);
      processor.connect(audioContext.destination);

      if (!manualStopRef.current) {
        callbacksRef.current.onStatus?.("Đang nghe...");
      }
    } catch (error) {
      console.error("Lỗi Microphone:", error);
      callbacksRef.current.onStatus?.(
        "Không thể mở Microphone trên trình duyệt",
        "#ff4444"
      );
      stopListening();
    }
  }, [stopListening]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  return {
    isListening,
    startListening,
    stopListening,
  };
}
