import React, { useState, useRef, useEffect } from "react";
import { Send, Trash2 } from "lucide-react";
import { theme } from "@/theme";
import { useSpeechRecognition, SpeechMicButton } from "./SpeechFunc";

interface ChatInputBarProps {
  onSend: (text: string) => void;
  onClear?: () => void;
  disabled?: boolean;
}

export const ChatInputBar: React.FC<ChatInputBarProps> = ({
  onSend,
  onClear,
  disabled = false,
}) => {
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Ref lưu giữ câu đã chốt chính thức để ghép nối với chữ tạm thời (xử lý trùng câu)
  const committedTextRef = useRef("");

  const { isListening, startListening, stopListening } = useSpeechRecognition({
    serverWsUrl: "ws://localhost:8000/ws/speech",
    onAppendText: (chunk) => {
      const prev = committedTextRef.current;
      const next = prev ? `${prev.trim()} ${chunk}` : chunk;
      committedTextRef.current = next;
      setInputText(next);
    },
    onReplaceText: (realtimeText) => {
      const prev = committedTextRef.current;
      const combined = prev ? `${prev.trim()} ${realtimeText}` : realtimeText;
      setInputText(combined);
    },
  });

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [inputText]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setInputText("");
    committedTextRef.current = ""; // Reset khi đã gửi tin nhắn
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`pt-3 mt-2 border-t ${theme.colors.border.primary}`}>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center gap-2 max-w-4xl mx-auto"
      >
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className={`p-2.5 rounded-xl border ${theme.colors.border.primary} ${theme.colors.text.secondary} hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0`}
            title="Dọn dẹp lịch sử"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}

        {/* Input Bar */}
        <div
          className={`relative flex-1 flex items-center ${theme.colors.bg.input} rounded-2xl border ${theme.colors.border.input} px-3.5 py-1 focus-within:ring-2 focus-within:ring-violet-500/40 focus-within:border-violet-500 ${theme.transitions.colors}`}
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              committedTextRef.current = e.target.value; // Cập nhật ref khi người dùng tự gõ tay
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Nhập câu hỏi của bạn..."
            className={`w-full resize-none bg-transparent py-1.5 pr-8 text-xs md:text-sm ${theme.colors.text.primary} placeholder:text-slate-400 focus:outline-none`}
          />

          {/* Nút Mic thu âm */}
          <SpeechMicButton
            isListening={isListening}
            onStart={startListening}
            onStop={stopListening}
          />

          <button
            type="submit"
            disabled={!inputText.trim() || disabled}
            className={`p-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
              inputText.trim() && !disabled
                ? "bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-600/30 scale-100"
                : "text-slate-400 cursor-not-allowed opacity-40 scale-95"
            }`}
            title="Gửi tin nhắn"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
      <p
        className={`text-[10px] text-center ${theme.colors.text.secondary} mt-1.5`}
      >
        Nhấn Enter để gửi, Shift + Enter để xuống dòng.
      </p>
    </div>
  );
};
