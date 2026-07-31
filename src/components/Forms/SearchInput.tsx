import { Search } from "lucide-react";
import { theme } from "@/theme";

export function SearchInput() {
  return (
    <div className="w-full max-w-sm space-y-1">
      <label className={`text-xs font-semibold ${theme.colors.text.secondary}`}>
        Tìm kiếm nhanh
      </label>
      <div className="relative">
        <Search className={`w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 ${theme.colors.text.muted}`} />
        <input
          type="text"
          placeholder="Tìm kiếm components, UI kits..."
          className={`w-full pl-11 pr-4 py-2.5 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border text-sm ${theme.colors.text.primary} placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 ${theme.transitions.default}`}
        />
      </div>
    </div>
  );
}
