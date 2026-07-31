import { Zap } from "lucide-react";

export function NeumorphismButton() {
  return (
    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm cursor-pointer transition-all active:scale-95 shadow-[5px_5px_10px_#cbd5e1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#0f172a] active:shadow-[inset_5px_5px_10px_#cbd5e1,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#020617,inset_-5px_-5px_10px_#0f172a]">
      <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
      <span>Neumorphism</span>
    </button>
  );
}
