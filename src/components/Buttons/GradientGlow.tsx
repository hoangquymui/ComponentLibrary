import { ArrowRight, Sparkles } from "lucide-react";

export function GradientGlowButton() {
  return (
    <button className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Hiệu ứng Glow/Shine quét qua button khi hover */}
      <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
      
      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
      <span className="relative z-10">Gradient Glow</span>
      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  );
}
