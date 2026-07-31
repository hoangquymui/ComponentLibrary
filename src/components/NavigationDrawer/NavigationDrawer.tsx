import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { theme } from "@/theme";
import { MENU_ITEMS } from "@/data/navigationData";

interface CollapsibleLeftSidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const NavigationDrawer: React.FC<CollapsibleLeftSidebarProps> = ({
  isExpanded,
  onToggle,
}) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 z-30 h-full ${theme.colors.bg.drawer} ${
        theme.colors.border.primary
      } border-r ${theme.colors.text.primary} flex flex-col justify-between shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* 🔹 1. APP HEADER BRAND INSIDE SIDEBAR */}
      <div>
        <div className="flex items-center h-14 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center w-full px-3">
            {/* Nút 3 gạch (Menu) nằm đúng vị trí căn giữa lề 16px */}
            <div className="w-10 flex justify-center shrink-0">
              <button
                onClick={onToggle}
                aria-label="Toggle Sidebar"
                className={`w-10 h-10 rounded-xl ${theme.colors.bg.button.toggle} hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-200 active:scale-90 cursor-pointer flex items-center justify-center shadow-sm`}
                title={isExpanded ? "Thu gọn Sidebar" : "Mở rộng Sidebar"}
              >
                <Menu
                  className={`w-5 h-5 ${theme.colors.text.accent} transition-transform duration-300 ${
                    isExpanded ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Tiêu đề ứng dụng */}
            {isExpanded && (
              <h1
                className={`font-bold text-base tracking-wide ${theme.colors.text.brand} whitespace-nowrap truncate ml-3`}
              >
                Tailwind Lab
              </h1>
            )}
          </div>
        </div>

        {/* 🔹 2. NAVIGATION LINKS */}
        <nav className="p-3 space-y-1.5">
          {MENU_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                title={!isExpanded ? item.label : undefined}
                className={`group w-full flex items-center h-11 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? `${theme.colors.bg.button.itemActive} shadow-sm`
                    : `${theme.colors.bg.button.itemHover} hover:translate-x-0.5`
                }`}
              >
                <div className="flex items-center w-full">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <IconComponent
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {isExpanded && (
                    <span className="whitespace-nowrap font-medium truncate ml-3">
                      {item.label}
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full shrink-0 mr-3 ${
                      isActive
                        ? theme.colors.bg.badgeItem.active
                        : theme.colors.bg.badgeItem.inactive
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 🔹 3. FOOTER SIDEBAR (Theme Toggle & Copyright HoangQuyMui) */}
      <div
        className={`p-3 border-t border-slate-200 dark:border-slate-800 ${theme.colors.bg.footerNote} flex flex-col gap-2.5 transition-all duration-300`}
      >
        {/* Truyền showLabel={isExpanded} cho ThemeToggle */}
        <div className="flex items-center w-full px-0">
          <ThemeToggle showLabel={isExpanded} />
        </div>

        {/* Thông tin Bản quyền HoangQuyMui */}
        <div className="text-center pt-1 border-t border-slate-200/60 dark:border-slate-800/60 overflow-hidden relative min-h-[22px] flex items-center justify-center">
          {isExpanded ? (
            <p
              className={`text-[11px] font-semibold ${theme.colors.text.secondary} tracking-wide whitespace-nowrap`}
            >
              © 2026 Designed by{" "}
              <span className="text-violet-500 dark:text-violet-400 font-bold">
                HoangQuyMui
              </span>
            </p>
          ) : (
            <span
              className="text-[10px] font-bold text-violet-500 dark:text-violet-400 select-none"
              title="© 2026 HoangQuyMui"
            >
              HQM
            </span>
          )}
        </div>
      </div>
    </aside>
  );
};
