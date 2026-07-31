import { Home, Layers, Settings, User, Smartphone } from "lucide-react";
import { useState } from "react";
import { theme } from "@/theme";

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Trang chủ", icon: Home, text: "Giao diện Trang Chủ Ứng Dụng Di Động" },
    { id: "projects", label: "Dự án", icon: Layers, text: "Danh sách Các Dự Án & Tasks Đang Thực Hiện" },
    { id: "profile", label: "Hồ sơ", icon: User, text: "Thông Tin Cá Nhân & Cài Đặt Tài Khoản" },
    { id: "settings", label: "Cài đặt", icon: Settings, text: "Cấu Hình Hệ Thống & Tùy Chọn Giao Diện" },
  ];

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className={`w-full max-w-sm rounded-3xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-2xl overflow-hidden flex flex-col relative`}>
      {/* Khung màn hình ứng dụng di động minh họa */}
      <div className="p-6 text-center space-y-3 min-h-[180px] flex flex-col justify-center items-center bg-slate-50/50 dark:bg-slate-950/40">
        <div className="flex items-center gap-1.5 text-xs text-indigo-500 font-semibold">
          <Smartphone className="w-4 h-4" />
          <span>Mobile App Preview</span>
        </div>
        <h5 className={`text-sm font-bold ${theme.colors.text.primary}`}>
          {currentTabObj.text}
        </h5>
        <p className={`text-[11px] ${theme.colors.text.muted}`}>
          Bấm các nút icon trên thanh Bottom Navigation bên dưới để chuyển màn hình ví dụ.
        </p>
      </div>

      {/* Thanh Bottom Navigation */}
      <div className={`px-6 py-3 border-t border-slate-200 dark:border-slate-800 ${theme.colors.bg.drawer} flex items-center justify-between`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
                isActive
                  ? `${theme.colors.text.accent} scale-105 font-bold`
                  : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
