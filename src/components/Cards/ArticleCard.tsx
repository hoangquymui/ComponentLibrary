import { Clock, Tag } from "lucide-react";
import { theme } from "@/theme";

export function ArticleCard() {
  return (
    <div className={`w-full max-w-sm rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md overflow-hidden flex flex-col group`}>
      <div className="h-44 bg-gradient-to-tr from-slate-800 via-indigo-950 to-slate-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🎨</span>
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-indigo-300 border border-indigo-500/20 font-medium">
          <Tag className="w-3 h-3" /> Tailwind CSS
        </span>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className={`flex items-center gap-2 text-[11px] ${theme.colors.text.muted}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>5 phút đọc</span>
            <span>•</span>
            <span>31 Tháng 7, 2026</span>
          </div>
          <h4 className={`text-base font-bold ${theme.colors.text.primary} group-hover:text-indigo-500 transition-colors line-clamp-2`}>
            Hướng dẫn xây dựng hệ thống Component với Tailwind CSS v4 & React
          </h4>
        </div>

        <p className={`text-xs ${theme.colors.text.secondary} line-clamp-2`}>
          Khám phá tư duy tạo Design Tokens tập trung và tổ chức thư mục mã nguồn chuẩn mực cho dự án Web.
        </p>
      </div>
    </div>
  );
}
