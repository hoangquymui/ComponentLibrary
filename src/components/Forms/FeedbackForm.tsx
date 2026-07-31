import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { theme } from "@/theme";

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <label className={`text-xs font-semibold ${theme.colors.text.secondary}`}>Ý kiến đóng góp</label>
        <div className="relative">
          <textarea
            required
            rows={4}
            placeholder="Hãy chia sẻ nhận xét hoặc góp ý của bạn về giao diện này..."
            className={`w-full p-3 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border text-sm ${theme.colors.text.primary} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 ${theme.transitions.default} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-3 rounded-xl ${theme.colors.bg.button.primary} font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer`}
      >
        {submitted ? (
          <>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Đã gửi ý kiến!</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Gửi phản hồi</span>
          </>
        )}
      </button>
    </form>
  );
}
