import { useState } from "react";
import { Menu, Component, CreditCard, FormInput, Navigation as NavIcon, Sparkles, TrendingUp, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { theme } from "@/theme";

export function CollapsibleRightSidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("buttons");

  const navItems = [
    { id: "buttons", label: "Buttons & Badges", icon: Component, count: 12 },
    { id: "cards", label: "Cards & Containers", icon: CreditCard, count: 8 },
    { id: "forms", label: "Forms & Inputs", icon: FormInput, count: 5 },
    { id: "navigation", label: "Navigation & Bars", icon: NavIcon, count: 7 },
  ];

  return (
    <div className={`w-full rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-lg overflow-hidden flex relative min-h-[380px]`}>
      {/* Khung nội dung chính minh họa ở bên trái */}
      <div className="flex-1 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h4 className={`text-base font-bold ${theme.colors.text.primary}`}>
            Bảng điều khiển ứng dụng
          </h4>
        </div>
        
        <p className={`text-xs ${theme.colors.text.secondary} leading-relaxed max-w-md`}>
          Đây là khu vực hiển thị nội dung chính của ứng dụng. Hãy thử bấm nút <strong>3 gạch (☰)</strong> ở lề phải để trải nghiệm mở rộng thanh Right Sidebar kèm nút Chuyển đổi giao diện Sáng/Tối.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className={`p-4 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] uppercase font-semibold ${theme.colors.text.muted}`}>Tổng lượt xem</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <span className={`text-lg font-bold ${theme.colors.text.primary}`}>12,450</span>
          </div>

          <div className={`p-4 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border space-y-1`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] uppercase font-semibold ${theme.colors.text.muted}`}>Tài khoản mới</span>
              <User className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <span className={`text-lg font-bold ${theme.colors.text.primary}`}>+380</span>
          </div>
        </div>
      </div>

      {/* Thanh Right Sidebar trượt mượt chính xác ở bên phải */}
      <aside
        className={`bg-slate-100/80 dark:bg-slate-900/90 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isExpanded ? "w-60" : "w-16"
        }`}
      >
        <div>
          {/* Header với nút 3 gạch (Menu) căn giữa lề 16px */}
          <div className="flex items-center h-14 border-b border-slate-200 dark:border-slate-800 px-3">
            <div className="w-10 flex justify-center shrink-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
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
            {isExpanded && (
              <h4 className={`font-bold text-sm tracking-wide ${theme.colors.text.primary} whitespace-nowrap truncate ml-3`}>
                Right Sidebar
              </h4>
            )}
          </div>

          {/* Danh sách các Tab Nav */}
          <nav className="p-3 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={!isExpanded ? item.label : undefined}
                  className={`group w-full flex items-center h-11 rounded-xl font-medium text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${theme.colors.bg.button.primary} shadow-sm`
                      : `${theme.colors.text.secondary} hover:bg-slate-200/80 dark:hover:bg-slate-800/80 hover:${theme.colors.text.primary}`
                  }`}
                >
                  <div className="flex items-center w-full">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {isExpanded && (
                      <span className="whitespace-nowrap font-medium truncate ml-3">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {isExpanded && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 mr-3 ${isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"}`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer ở đáy với nút Sáng / Tối ThemeToggle chuẩn 100% */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center w-full">
          <ThemeToggle showLabel={isExpanded} />
        </div>
      </aside>
    </div>
  );
}
