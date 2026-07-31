import { ShoppingCart, Star } from "lucide-react";
import { theme } from "@/theme";

export function ProductCard() {
  return (
    <div className={`w-full max-w-sm rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md p-5 space-y-4`}>
      <div className="h-40 rounded-xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center relative overflow-hidden group">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">🎧</span>
        <span className="absolute top-2.5 right-2.5 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
          -20%
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-medium ${theme.colors.text.muted}`}>Âm thanh cao cấp</span>
          <div className="flex items-center gap-1 text-amber-400 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">4.9</span>
            <span className={`text-[10px] ${theme.colors.text.muted}`}>(128)</span>
          </div>
        </div>

        <h4 className={`text-base font-bold ${theme.colors.text.primary}`}>
          Tai nghe Over-Ear Wireless Pro
        </h4>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
        <div>
          <span className={`text-xs ${theme.colors.text.muted} line-through mr-1.5`}>$250</span>
          <span className={`text-lg font-extrabold ${theme.colors.text.primary}`}>$199</span>
        </div>

        <button className={`p-2.5 rounded-xl ${theme.colors.bg.button.primary} text-white shadow-md cursor-pointer transition-all active:scale-95`} title="Thêm vào giỏ">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
