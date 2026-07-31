import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { theme } from "@/theme";

export function SocialPostCard() {
  return (
    <div className={`w-full max-w-sm rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md p-5 space-y-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 p-0.5">
            <div className={`w-full h-full rounded-full ${theme.colors.bg.drawer} flex items-center justify-center text-xs font-bold ${theme.colors.text.primary}`}>
              HQ
            </div>
          </div>
          <div>
            <h5 className={`text-sm font-bold ${theme.colors.text.primary}`}>Hoàng Quý Mùi</h5>
            <span className={`text-[11px] ${theme.colors.text.muted}`}>@hoangquymui • 2 giờ trước</span>
          </div>
        </div>
        <button className={`p-1.5 rounded-lg ${theme.colors.text.muted} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`}>
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <p className={`text-xs ${theme.colors.text.secondary} leading-relaxed`}>
        Vừa hoàn thành bộ sưu tập UI Components với Tailwind CSS v4 & React Router! Cảm giác thiết kế Design Tokens tập trung thật sự mượt mà 🚀✨
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
        <button className={`flex items-center gap-1.5 ${theme.colors.text.muted} hover:text-rose-500 transition-colors cursor-pointer`}>
          <Heart className="w-4 h-4" />
          <span>42</span>
        </button>
        <button className={`flex items-center gap-1.5 ${theme.colors.text.muted} hover:text-indigo-500 transition-colors cursor-pointer`}>
          <MessageSquare className="w-4 h-4" />
          <span>12</span>
        </button>
        <button className={`flex items-center gap-1.5 ${theme.colors.text.muted} hover:text-emerald-500 transition-colors cursor-pointer`}>
          <Share2 className="w-4 h-4" />
          <span>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
}
