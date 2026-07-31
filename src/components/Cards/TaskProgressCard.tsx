import { CheckCircle2, Circle } from "lucide-react";
import { theme } from "@/theme";

export function TaskProgressCard() {
  return (
    <div className={`w-full max-w-sm rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md p-5 space-y-4`}>
      <div className="flex items-center justify-between">
        <h4 className={`text-sm font-bold ${theme.colors.text.primary}`}>Tiến độ dự án</h4>
        <span className="text-xs font-bold text-violet-500 bg-violet-500/10 px-2.5 py-1 rounded-lg">
          75%
        </span>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-500 h-2 rounded-full w-3/4 transition-all duration-500" />
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span className={theme.colors.text.primary}>Thiết kế UI Theme System</span>
          </div>
          <span className="text-[10px] text-emerald-500 font-semibold">Hoàn thành</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span className={theme.colors.text.primary}>Tối ưu React Router Tabs</span>
          </div>
          <span className="text-[10px] text-emerald-500 font-semibold">Hoàn thành</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className={theme.colors.text.primary}>Phát triển Card Components</span>
          </div>
          <span className="text-[10px] text-indigo-400 font-semibold">Đang xử lý</span>
        </div>
      </div>
    </div>
  );
}
