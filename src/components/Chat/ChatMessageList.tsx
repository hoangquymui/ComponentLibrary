import React, { useEffect, useRef } from "react";
import { Sparkles, Compass, Code, Lightbulb } from "lucide-react";
import type { ChatMessage } from "./ChatTypes";
import { ChatMessageItem } from "./ChatMessageItem";
import { theme } from "@/theme";

interface ChatMessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onQuickPrompt?: (prompt: string) => void;
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
  isTyping,
  onQuickPrompt,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center space-y-4">
        {/* Theme Sparkles Icon */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>

        <div className="space-y-1 max-w-sm">
          <h2 className={`text-lg md:text-xl font-bold tracking-tight ${theme.colors.text.primary}`}>
            Tôi có thể giúp gì cho bạn hôm nay?
          </h2>
          <p className={`text-xs ${theme.colors.text.secondary}`}>
            Chọn một gợi ý hoặc nhập tin nhắn bên dưới để trò chuyện.
          </p>
        </div>

        {/* Theme Quick Prompt Cards */}
        {onQuickPrompt && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md pt-2">
            {[
              { icon: Lightbulb, text: "Gợi ý ý tưởng thiết kế giao diện web" },
              { icon: Code, text: "Giải thích cú pháp Tailwind CSS v4" },
              { icon: Compass, text: "Lập kế hoạch công việc trong tuần" },
              { icon: Sparkles, text: "Tạo danh sách các câu hỏi thường gặp" },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onQuickPrompt(item.text)}
                  className={`p-2.5 text-left rounded-xl ${theme.colors.border.primary} border ${theme.colors.bg.card} hover:border-violet-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-[11px] ${theme.colors.text.primary} transition-all duration-200 cursor-pointer flex items-center gap-2 group shadow-2xs`}
                >
                  <IconComp className="w-3.5 h-3.5 text-violet-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate font-medium">{item.text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2.5">
      {messages.map((msg) => (
        <ChatMessageItem key={msg.id} message={msg} />
      ))}

      {/* Theme Typing Indicator */}
      {isTyping && (
        <div className={`flex items-center gap-2.5 p-2.5 rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border mr-auto max-w-xs shadow-2xs`}>
          <div className="w-6 h-6 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <span className={`text-[11px] font-medium ${theme.colors.text.secondary}`}>
            Đang suy nghĩ...
          </span>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};
