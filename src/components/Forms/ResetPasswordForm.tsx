import React, { useState } from "react";
import { Lock, KeyRound, CheckCircle2 } from "lucide-react";
import { theme } from "@/theme";

export function ResetPasswordForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <label className={`text-xs font-semibold ${theme.colors.text.secondary}`}>Mật khẩu mới</label>
        <div className="relative">
          <Lock className={`w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 ${theme.colors.text.muted}`} />
          <input
            type="password"
            required
            placeholder="••••••••"
            className={`w-full pl-11 pr-4 py-2.5 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border text-sm ${theme.colors.text.primary} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 ${theme.transitions.default}`}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className={`text-xs font-semibold ${theme.colors.text.secondary}`}>Xác nhận mật khẩu</label>
        <div className="relative">
          <KeyRound className={`w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 ${theme.colors.text.muted}`} />
          <input
            type="password"
            required
            placeholder="••••••••"
            className={`w-full pl-11 pr-4 py-2.5 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border text-sm ${theme.colors.text.primary} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 ${theme.transitions.default}`}
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
            <span>Đã đặt lại mật khẩu!</span>
          </>
        ) : (
          <span>Cập nhật mật khẩu</span>
        )}
      </button>
    </form>
  );
}
