import React, { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import type { ChatMessage } from "@/components/Chat/ChatTypes";
import { ChatMessageList } from "@/components/Chat/ChatMessageList";
import { ChatInputBar } from "@/components/Chat/ChatInputBar";
import { theme } from "@/theme";

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (userText: string) => {
    const timeString = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: timeString,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Giả lập bot phản hồi sau 600ms
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: "Chức năng đang cập nhật.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearHistory = () => {
    setMessages([]);
  };

  return (
    <div className="w-full flex flex-col h-[calc(100vh-12rem)] min-h-[460px]">
      {/* Header trang Chat dùng viền gạch dưới nhẹ */}
      <div className={`pb-3 mb-2 border-b ${theme.colors.border.primary} flex items-center justify-between`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h1 className={`font-bold text-sm md:text-base ${theme.colors.text.primary} flex items-center gap-2`}>
              AI Chat Assistant
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                v1.0
              </span>
            </h1>
          </div>
        </div>

        {messages.length > 0 && (
          <button
            onClick={handleClearHistory}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium ${theme.colors.text.secondary} hover:${theme.colors.text.primary} rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm mới</span>
          </button>
        )}
      </div>

      {/* Danh sách tin nhắn */}
      <ChatMessageList
        messages={messages}
        isTyping={isTyping}
        onQuickPrompt={handleSendMessage}
      />

      {/* Input bar */}
      <ChatInputBar
        onSend={handleSendMessage}
        onClear={messages.length > 0 ? handleClearHistory : undefined}
        disabled={isTyping}
      />
    </div>
  );
};
