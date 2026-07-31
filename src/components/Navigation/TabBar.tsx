import { useState } from "react";
import { theme } from "@/theme";

export function TabBar() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Tổng quan", content: "Đây là nội dung của Tab Tổng Quan. Hiển thị báo cáo vắn tắt về tiến độ dự án và thông số cơ bản." },
    { id: "analytics", label: "Phân tích", content: "Đây là nội dung của Tab Phân Tích. Thống kê chi tiết các biểu đồ tăng trưởng và lưu lượng người dùng." },
    { id: "reports", label: "Báo cáo", content: "Đây là nội dung của Tab Báo Cáo. Xuất các tệp báo cáo PDF / Excel và danh sách tác vụ đã hoàn thành." },
  ];

  const currentTabObj = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className={`w-full max-w-lg rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md overflow-hidden flex flex-col`}>
      {/* Thanh TabBar Segmented */}
      <div className={`p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-center`}>
        <div className={`p-1 rounded-xl ${theme.colors.bg.input} ${theme.colors.border.input} border inline-flex gap-1`}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? `${theme.colors.bg.drawer} ${theme.colors.text.primary} shadow-sm font-semibold`
                    : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nội dung tương ứng với Tab đang chọn */}
      <div className="p-6 text-center space-y-2 min-h-[100px] flex flex-col justify-center items-center">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
          {currentTabObj.label}
        </span>
        <p className={`text-xs ${theme.colors.text.secondary} leading-relaxed max-w-sm`}>
          {currentTabObj.content}
        </p>
      </div>
    </div>
  );
}
