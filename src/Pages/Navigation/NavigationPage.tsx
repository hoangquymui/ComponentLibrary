import { Link } from "react-router-dom";
import { NAVIGATION_COMPONENTS } from "@/data/navigationComponentsData";
import { theme } from "@/theme";

export function NavigationPage() {
  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h3 className={`text-xl font-bold ${theme.colors.text.primary}`}>
          Navigation & Bars Collection ({NAVIGATION_COMPONENTS.length} Mẫu
          Component)
        </h3>
        <p className={`text-sm ${theme.colors.text.secondary}`}>
          Thử tương tác trực tiếp với các thanh điều hướng. Bấm vào tiêu đề chữ
          bên dưới để tới trang chi tiết.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-6">
        {NAVIGATION_COMPONENTS.map((item, index) => (
          <div
            key={item.id}
            className="w-full flex flex-col items-center justify-between gap-4 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-full flex items-center justify-center py-2">
              {item.component}
            </div>

            <Link
              to={`/component/${item.id}`}
              className={`text-xs font-semibold ${theme.colors.text.secondary} hover:text-violet-500 transition-colors tracking-wide border-t border-slate-200/60 dark:border-slate-800/60 pt-3 w-full text-center cursor-pointer`}
            >
              {index + 1}. {item.title} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
