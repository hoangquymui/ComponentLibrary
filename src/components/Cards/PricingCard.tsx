import { Check, Zap } from "lucide-react";
import { theme } from "@/theme";

export function PricingCard() {
  return (
    <div className={`w-full max-w-sm p-6 rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-lg space-y-6 relative overflow-hidden`}>
      <div className="absolute -right-12 -top-12 w-28 h-28 bg-violet-500/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-center justify-between">
        <div>
          <h4 className={`text-lg font-bold ${theme.colors.text.primary}`}>Gói Pro Plan</h4>
          <p className={`text-xs ${theme.colors.text.secondary}`}>Dành cho cá nhân & Freelancer</p>
        </div>
        <span className="p-2 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
          <Zap className="w-5 h-5" />
        </span>
      </div>

      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-extrabold ${theme.colors.text.primary}`}>$29</span>
        <span className={`text-xs ${theme.colors.text.secondary}`}>/ tháng</span>
      </div>

      <ul className="space-y-2.5 text-xs">
        <li className={`flex items-center gap-2.5 ${theme.colors.text.secondary}`}>
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Truy cập hơn 100+ UI Components</span>
        </li>
        <li className={`flex items-center gap-2.5 ${theme.colors.text.secondary}`}>
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Hỗ trợ React & Tailwind CSS v4</span>
        </li>
        <li className={`flex items-center gap-2.5 ${theme.colors.text.secondary}`}>
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Cập nhật miễn phí trọn đời</span>
        </li>
      </ul>

      <button className={`w-full py-3 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-md cursor-pointer transition-all active:scale-[0.98]`}>
        Nâng cấp ngay
      </button>
    </div>
  );
}
