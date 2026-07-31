import { Link } from "react-router-dom";
import { FORM_COMPONENTS } from "@/data/formsData";
import { theme } from "@/theme";

export function FormsPage() {
  return (
    <div className="space-y-8 w-full max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h3 className={`text-xl font-bold ${theme.colors.text.primary}`}>
          Forms & Inputs Collection ({FORM_COMPONENTS.length} Mẫu Component)
        </h3>
        <p className={`text-sm ${theme.colors.text.secondary}`}>
          Thử nhập dữ liệu hoặc tương tác trực tiếp với các form. Bấm vào tiêu
          đề chữ bên dưới mỗi form để tới trang chi tiết.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
        {FORM_COMPONENTS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between gap-4 p-6 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              {item.component}
            </div>

            <Link
              to={`/component/${item.id}`}
              className={`text-xs font-semibold ${theme.colors.text.secondary} hover:text-violet-500 transition-colors tracking-wide border-t border-slate-200/60 dark:border-slate-800/60 pt-3 w-full text-center cursor-pointer`}
            >
              {item.title} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
