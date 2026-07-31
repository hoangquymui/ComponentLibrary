import { Calendar, MapPin, Users } from "lucide-react";
import { theme } from "@/theme";

export function EventCard() {
  return (
    <div className={`w-full max-w-sm rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md p-5 space-y-4`}>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center justify-center w-14 h-16 rounded-xl bg-violet-600 text-white shadow-md">
          <span className="text-[10px] uppercase font-semibold tracking-wider opacity-80">THÁNG 8</span>
          <span className="text-xl font-extrabold leading-none">15</span>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-500 font-semibold border border-violet-500/20">
            Hội thảo Tech
          </span>
          <h4 className={`text-sm font-bold ${theme.colors.text.primary} line-clamp-1`}>
            React & Tailwind Conference 2026
          </h4>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className={`flex items-center gap-2 ${theme.colors.text.secondary}`}>
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>09:00 AM - 05:00 PM</span>
        </div>
        <div className={`flex items-center gap-2 ${theme.colors.text.secondary}`}>
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Trung tâm Hội nghị Quốc tế, Hà Nội</span>
        </div>
        <div className={`flex items-center gap-2 ${theme.colors.text.secondary}`}>
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>250+ Người tham gia</span>
        </div>
      </div>

      <button className={`w-full py-2.5 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-sm cursor-pointer transition-all active:scale-[0.98]`}>
        Đăng ký vé tham dự
      </button>
    </div>
  );
}
