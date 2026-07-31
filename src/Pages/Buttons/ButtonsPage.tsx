import { Link } from "react-router-dom";
import { BUTTON_COMPONENTS } from "@/data/buttonsData";
import { theme } from "@/theme";

export function ButtonsPage() {
  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h3 className={`text-xl font-bold ${theme.colors.text.primary}`}>
          Buttons & Badges Collection ({BUTTON_COMPONENTS.length} Mẫu Component)
        </h3>
        <p className={`text-sm ${theme.colors.text.secondary}`}>
          Thử tương tác trực tiếp với các button. Bấm vào tiêu đề chữ bên dưới mỗi card để tới trang chi tiết.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {BUTTON_COMPONENTS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between gap-4 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow min-h-[140px]"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              {item.component}
            </div>
            
            <Link
              to={`/component/${item.id}`}
              className={`text-xs font-semibold ${theme.colors.text.secondary} hover:text-violet-500 transition-colors tracking-wide border-t border-slate-200/60 dark:border-slate-800/60 pt-2.5 w-full text-center cursor-pointer`}
            >
              {item.title} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
