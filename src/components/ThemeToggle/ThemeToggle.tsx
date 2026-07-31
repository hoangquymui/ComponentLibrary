import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { theme } from "@/theme";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export const ThemeToggle = ({ showLabel = true }: ThemeToggleProps) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`group relative h-10 rounded-xl ${
        theme.colors.bg.button.toggle
      } hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-300 ease-in-out cursor-pointer flex items-center shadow-sm ${
        showLabel
          ? "w-full px-3 justify-start gap-3"
          : "w-10 justify-center px-0 mx-auto"
      }`}
      title="Đổi giao diện Sáng / Tối"
    >
      {/* Icon Mặt Trời / Mặt Trăng cố định căn giữa trong ô vuông 20px */}
      <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
        <Sun
          className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`w-4 h-4 text-indigo-500 dark:text-indigo-400 absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>

      {/* Dòng chữ nhãn chuyển đổi với hiệu ứng xuất hiện/ẩn trượt mượt mà */}
      <span
        className={`text-xs font-medium whitespace-nowrap transition-all duration-300 origin-left ${
          showLabel
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none absolute"
        }`}
      >
        {isDark ? "Giao diện Sáng" : "Giao diện Tối"}
      </span>
    </button>
  );
};
