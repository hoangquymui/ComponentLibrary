import { useState } from "react";
import { Menu, X, Layers, Component, CreditCard, FormInput, Navigation as NavIcon } from "lucide-react";
import { theme } from "@/theme";

export function NavigationDrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/buttons");

  const menuItems = [
    { id: "buttons", label: "Buttons & Badges", icon: Component, count: 12, path: "/buttons" },
    { id: "cards", label: "Cards & Containers", icon: CreditCard, count: 8, path: "/cards" },
    { id: "forms", label: "Forms & Inputs", icon: FormInput, count: 5, path: "/forms" },
    { id: "navigation", label: "Navigation & Bars", icon: NavIcon, count: 8, path: "/navigation" },
  ];

  return (
    <div className={`w-full max-w-2xl rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-xl overflow-hidden flex flex-col relative min-h-[420px]`}>
      {/* 1. Header & Nút Hamburger Trigger */}
      <header className={`px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl ${theme.colors.bg.button.toggle} ${theme.colors.text.primary} hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer`}
            title="Mở Navigation Drawer"
          >
            {isOpen ? <X className="w-5 h-5 text-indigo-500" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span className={`font-bold text-sm ${theme.colors.text.primary}`}>Tailwind Lab Drawer</span>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">
          {isOpen ? "Drawer: MỞ" : "Drawer: ĐÓNG"}
        </span>
      </header>

      {/* 2. Khung Nội dung chính ở giữa */}
      <div className="p-6 flex-1 flex flex-col items-center justify-center text-center space-y-3 bg-slate-50/50 dark:bg-slate-950/40">
        <h4 className={`text-base font-bold ${theme.colors.text.primary}`}>
          Trượt Navigation Drawer từ lề trái
        </h4>
        <p className={`text-xs ${theme.colors.text.secondary} max-w-md leading-relaxed`}>
          Bấm nút <strong>Hamburger Menu (☰)</strong> ở góc trái trên cùng để trải nghiệm mở thanh Side Navigation Drawer với hiệu ứng trượt mượt mà kèm Scrim Backdrop mờ kính.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className={`px-4 py-2 rounded-xl ${theme.colors.bg.button.primary} text-xs font-semibold shadow-sm cursor-pointer active:scale-95`}
        >
          Mở Drawer ngay
        </button>
      </div>

      {/* 3. Scrim / Backdrop mờ kính khi mở Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 z-20 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        />
      )}

      {/* 4. Sliding Sidebar Navigation Drawer từ lề trái */}
      <aside
        className={`absolute top-0 left-0 z-30 w-64 h-full ${theme.colors.bg.drawer} border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header Drawer */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span className={`font-bold text-sm ${theme.colors.text.primary}`}>Danh Mục Drawer</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items trong Drawer */}
          <nav className="p-3 space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.path);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all cursor-pointer ${
                    isActive
                      ? `${theme.colors.bg.button.primary} shadow-sm`
                      : `${theme.colors.text.secondary} hover:bg-slate-100 dark:hover:bg-slate-800 hover:${theme.colors.text.primary}`
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-500"}`}>
                    {item.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Drawer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <p className="text-[11px] text-slate-500 text-center">
            💡 Trượt mở Navigation Drawer mượt mà
          </p>
        </div>
      </aside>
    </div>
  );
}
