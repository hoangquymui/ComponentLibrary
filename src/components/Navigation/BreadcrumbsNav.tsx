import { ChevronRight, Home, FileText, Code } from "lucide-react";
import { theme } from "@/theme";

export function BreadcrumbsNav() {
  return (
    <div className={`w-full max-w-lg rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md overflow-hidden flex flex-col`}>
      {/* 1. Thanh Breadcrumbs Nav */}
      <div className={`px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center gap-2 text-xs overflow-x-auto`}>
        <a href="#home" className={`flex items-center gap-1.5 ${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors shrink-0`}>
          <Home className="w-3.5 h-3.5" />
          <span>Trang chủ</span>
        </a>

        <ChevronRight className={`w-3.5 h-3.5 ${theme.colors.text.muted} shrink-0`} />

        <a href="#components" className={`flex items-center gap-1.5 ${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors shrink-0`}>
          <Code className="w-3.5 h-3.5" />
          <span>Components</span>
        </a>

        <ChevronRight className={`w-3.5 h-3.5 ${theme.colors.text.muted} shrink-0`} />

        <span className={`font-semibold ${theme.colors.text.accent} shrink-0`}>
          Navigation & Bars
        </span>
      </div>

      {/* 2. Khung bài viết minh họa vị trí Breadcrumb */}
      <div className="p-6 space-y-2 text-left">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-indigo-500" />
          <h4 className={`text-sm font-bold ${theme.colors.text.primary}`}>
            Tài liệu hướng dẫn: Navigation & Bars
          </h4>
        </div>
        <p className={`text-xs ${theme.colors.text.secondary} leading-relaxed`}>
          Thanh Breadcrumb bên trên giúp người dùng xác định rõ vị trí của mình trong cấu trúc danh mục trang web và quay lại trang cha nhanh chóng.
        </p>
      </div>
    </div>
  );
}
