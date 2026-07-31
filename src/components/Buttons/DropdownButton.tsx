import { useState } from "react";
import { ChevronDown, Download, Share2, Copy } from "lucide-react";
import { theme } from "@/theme";

export function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl ${theme.colors.bg.button.primary} font-medium text-sm transition-all cursor-pointer shadow-sm active:scale-[0.98]`}
      >
        <span>Tác vụ</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-xl ${theme.colors.bg.drawer} ${theme.colors.border.primary} border shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150`}>
          <button className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${theme.colors.text.primary} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`}>
            <Download className="w-4 h-4 text-slate-400" />
            <span>Tải xuống PDF</span>
          </button>
          <button className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${theme.colors.text.primary} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`}>
            <Share2 className="w-4 h-4 text-slate-400" />
            <span>Chia sẻ liên kết</span>
          </button>
          <button className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${theme.colors.text.primary} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer`}>
            <Copy className="w-4 h-4 text-slate-400" />
            <span>Sao chép mã</span>
          </button>
        </div>
      )}
    </div>
  );
}
