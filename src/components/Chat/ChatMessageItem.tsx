import React, { useState } from "react";
import { User, Sparkles, Copy, Check } from "lucide-react";
import type { ChatMessage } from "./ChatTypes";
import { theme } from "@/theme";

interface ChatMessageItemProps {
  message: ChatMessage;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const isUser = message.sender === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex gap-2.5 md:gap-3 p-3 md:p-3.5 rounded-2xl transition-all ${
        isUser
          ? "bg-violet-600 dark:bg-violet-600 text-white ml-auto max-w-[85%] md:max-w-[70%] shadow-sm"
          : `${theme.colors.bg.card} ${theme.colors.border.primary} border mr-auto max-w-[90%] md:max-w-[80%] shadow-xs`
      }`}
    >
      {/* Avatar Icon */}
      <div
        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
          isUser
            ? "bg-white/20 text-white"
            : "bg-gradient-to-tr from-violet-600 to-indigo-500 text-white"
        }`}
      >
        {isUser ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-semibold text-[11px] ${
              isUser ? "text-violet-100" : theme.colors.text.secondary
            }`}
          >
            {isUser ? "Bạn" : "AI Assistant"}
          </span>
          <span
            className={`text-[10px] ${
              isUser ? "text-violet-200/80" : theme.colors.text.muted
            }`}
          >
            {message.timestamp}
          </span>
        </div>

        {/* Text Message */}
        <div
          className={`text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words ${
            isUser ? "text-white font-medium" : theme.colors.text.primary
          }`}
        >
          {message.text}
        </div>

        {/* Copy Action for Bot Response */}
        {!isUser && (
          <div className="pt-0.5 flex items-center">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1 text-[11px] ${theme.colors.text.secondary} hover:text-violet-500 dark:hover:text-violet-400 transition-colors cursor-pointer py-0.5 px-1.5 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50`}
              title="Sao chép"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-violet-500 dark:text-violet-400" />
                  <span className="text-violet-500 dark:text-violet-400 font-medium">
                    Đã sao chép
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Sao chép</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
