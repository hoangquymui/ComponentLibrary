import { Sparkles } from "lucide-react";

export function GlassmorphismButton() {
  return (
    <button className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/20 dark:bg-slate-800/40 backdrop-blur-md border border-white/30 dark:border-slate-700/50 text-slate-900 dark:text-white font-medium text-sm shadow-lg shadow-black/5 hover:bg-white/30 dark:hover:bg-slate-800/60 transition-all duration-300 cursor-pointer active:scale-[0.98]">
      <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <span>Glassmorphism</span>
    </button>
  );
}
