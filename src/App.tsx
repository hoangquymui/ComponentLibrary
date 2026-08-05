import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavigationDrawer } from "@/components/NavigationDrawer/NavigationDrawer";
import { ButtonsPage } from "@/Pages/Buttons/ButtonsPage";
import { CardsPage } from "@/Pages/Cards/CardsPage";
import { FormsPage } from "@/Pages/Forms/FormsPage";
import { NavigationPage } from "@/Pages/Navigation/NavigationPage";
import { OthersPage } from "@/Pages/Others/OthersPage";
import { ChatPage } from "@/Pages/Chat/ChatPage";
import { ComponentDetailPage } from "@/Pages/ComponentDetail/ComponentDetailPage";
import { theme } from "@/theme";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div
      className={`min-h-screen ${theme.colors.bg.primary} ${theme.colors.text.primary} font-sans antialiased ${theme.transitions.colors} flex flex-col justify-between`}
    >
      {/* Navigation Collapsible Left Sidebar Component */}
      <NavigationDrawer
        isExpanded={isNavOpen}
        onToggle={() => setIsNavOpen(!isNavOpen)}
      />

      {/* Main Content Area hiển thị nội dung theo Route */}
      <main
        className={`flex-1 p-6 md:p-10 transition-all duration-300 ease-in-out ${
          isNavOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="max-w-11/12 mx-auto space-y-6">
          {/* Khung chứa nội dung các Component thuộc Route */}
          <div
            className={`p-6 md:p-8 gap-3 ${theme.colors.bg.secondary} ${theme.colors.border.primary} border rounded-2xl flex items-center justify-center shadow-sm dark:shadow-none ${theme.transitions.colors}`}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/chat" replace />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/buttons" element={<ButtonsPage />} />
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/forms" element={<FormsPage />} />
              <Route path="/navigation" element={<NavigationPage />} />
              <Route path="/others" element={<OthersPage />} />
              <Route path="/component/:id" element={<ComponentDetailPage />} />
              <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
          </div>

          {/* Footer bản quyền HoangQuyMui toàn bộ ứng dụng */}
          <footer className={`text-center py-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs ${theme.colors.text.secondary}`}>
            <p>
              © {new Date().getFullYear()} TailwindCSS Component Library • Built with ❤️ by <strong className="text-violet-500 dark:text-violet-400 font-bold">HoangQuyMui</strong>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
