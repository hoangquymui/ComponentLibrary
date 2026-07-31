import { TrendingUp, ArrowUpRight } from "lucide-react";
import { theme } from "@/theme";

export function StatCard() {
  return (
    <div className={`w-full max-w-sm p-6 rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md space-y-4`}>
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold uppercase tracking-wider ${theme.colors.text.secondary}`}>
          Tổng doanh thu
        </span>
        <div className={`p-2 rounded-xl ${theme.colors.bg.badge}`}>
          <TrendingUp className={`w-5 h-5 ${theme.colors.text.accent}`} />
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <h3 className={`text-2xl font-bold ${theme.colors.text.primary}`}>
          $24,500.00
        </h3>
        <span className="inline-flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
          +12.5%
          <ArrowUpRight className="w-3 h-3 ml-0.5" />
        </span>
      </div>

      <p className={`text-xs ${theme.colors.text.secondary}`}>
        So với tháng trước (+ $2,750.00)
      </p>
    </div>
  );
}
