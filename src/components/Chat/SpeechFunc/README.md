# 🎙️ Hướng dẫn Cài đặt & Sử dụng Module SpeechFunc

Thư mục `SpeechFunc` chứa trọn bộ thu âm Microphone (React + TypeScript) và Server AI nhận dạng giọng nói (Python).

---

## 🐍 1. Bật Backend (Python STT Server)

Mở Terminal tại thư mục `SpeechFunc/python` và chạy 2 lệnh:

```bash
# Bước 1: Cài thư viện Python
pip install -r requirements.txt

# Bước 2: Bật Server STT
python server_stt.py
```

> Server sẽ chạy tại: `ws://localhost:8000/ws/speech`

_(Mẹo: Muốn chạy ngầm 24/7 bằng PM2 ➔ gõ lệnh: `pm2 start stt_model.config.cjs`)_

---

## ⚛️ 2. Tích hợp Frontend (React + TypeScript)

### Bước 1: Copy thư mục `SpeechFunc`

Dán thư mục `SpeechFunc` vào `src/components/` trong dự án mới của bạn:

```text
src/
└── components/
    └── SpeechFunc/
```

### Bước 2: Thêm Mic vào ô Chat

Trong file ô nhập tin nhắn (ví dụ `ChatInputBar.tsx`):

```tsx
import { useState, useRef } from "react";
import { useSpeechRecognition, SpeechMicButton } from "./SpeechFunc";

export function ChatInput() {
  const [text, setText] = useState("");
  const committedTextRef = useRef("");

  // 1. Khai báo Hook Mic
  const { isListening, startListening, stopListening } = useSpeechRecognition({
    serverWsUrl: "ws://localhost:8000/ws/speech",
    onAppendText: (chunk) => {
      const prev = committedTextRef.current;
      const next = prev ? `${prev.trim()} ${chunk}` : chunk;
      committedTextRef.current = next;
      setText(next);
    },
    onReplaceText: (tempText) => {
      const prev = committedTextRef.current;
      setText(prev ? `${prev.trim()} ${tempText}` : tempText);
    },
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          committedTextRef.current = e.target.value;
        }}
      />

      {/* 2. Hiển thị Nút Mic */}
      <SpeechMicButton
        isListening={isListening}
        onStart={startListening}
        onStop={stopListening}
      />
    </div>
  );
}
```
