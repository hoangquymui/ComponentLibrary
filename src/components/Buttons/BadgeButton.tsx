import { Bell } from "lucide-react";

export function BadgeButton() {
  return (
    <button className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all cursor-pointer">
      <Bell className="w-4 h-4 text-slate-500 dark:text-slate-400" />
      <span>Thông báo</span>
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md animate-bounce">
        3
      </span>
    </button>
  );
}
