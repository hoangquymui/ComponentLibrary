import { Search, Layers, Bell, ArrowRight } from "lucide-react";
import { theme } from "@/theme";

export function NavbarWeb() {
  return (
    <div className={`w-full max-w-3xl rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-lg overflow-hidden flex flex-col`}>
      {/* 1. Header Navbar Web */}
      <header className={`w-full px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md`}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-violet-600 text-white shadow-sm">
            <Layers className="w-5 h-5" />
          </div>
          <span className={`font-bold text-base tracking-wide ${theme.colors.text.primary}`}>
            WebStudio
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-xs font-medium">
          <a href="#features" className={`${theme.colors.text.primary} hover:text-violet-500 transition-colors`}>
            Tính năng
          </a>
          <a href="#pricing" className={`${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors`}>
            Bảng giá
          </a>
          <a href="#docs" className={`${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors`}>
            Tài liệu
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className={`p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`} title="Tìm kiếm">
            <Search className="w-4 h-4" />
          </button>
          <button className={`p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`} title="Thông báo">
            <Bell className="w-4 h-4" />
          </button>
          <button className={`px-4 py-2 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-sm cursor-pointer active:scale-95`}>
            Dùng thử
          </button>
        </div>
      </header>

      {/* 2. Nội dung trang mẫu bên dưới Navbar */}
      <div className="p-6 md:p-8 space-y-4 bg-slate-50/50 dark:bg-slate-950/40 text-center">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
          🚀 Nền tảng thiết kế Web thế hệ mới
        </span>

        <h3 className={`text-xl md:text-2xl font-extrabold ${theme.colors.text.primary} max-w-lg mx-auto leading-tight`}>
          Xây dựng ứng dụng Web hiện đại nhanh hơn bao giờ hết
        </h3>

        <p className={`text-xs ${theme.colors.text.secondary} max-w-md mx-auto leading-relaxed`}>
          Khám phá bộ UI Components hoàn chỉnh với Tailwind CSS v4. Tối ưu trải nghiệm người dùng trên mọi thiết bị.
        </p>

        <div className="pt-2 flex justify-center gap-3">
          <button className={`px-5 py-2.5 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-md flex items-center gap-2 cursor-pointer`}>
            <span>Bắt đầu ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
