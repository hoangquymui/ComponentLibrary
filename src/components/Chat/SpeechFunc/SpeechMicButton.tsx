import React from "react";
import { Mic, Square } from "lucide-react";

export interface SpeechMicButtonProps {
  isListening: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SpeechMicButton: React.FC<SpeechMicButtonProps> = ({
  isListening,
  onStart,
  onStop,
  disabled = false,
  className = "",
  style = {},
}) => {
  return (
    <button
      type="button"
      onClick={isListening ? onStop : onStart}
      disabled={disabled}
      title={isListening ? "Dừng thu âm" : "Bật micro"}
      className={`p-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
        isListening
          ? "bg-red-500 hover:bg-red-600 text-white shadow-sm shadow-red-500/40 animate-pulse"
          : "text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
      } ${className}`}
      style={style}
    >
      {isListening ? (
        <Square className="w-3.5 h-3.5 fill-current" />
      ) : (
        <Mic className="w-4 h-4" />
      )}
    </button>
  );
};
