import { ChevronLeft, ChevronRight, FileCode } from "lucide-react";
import { useState } from "react";
import { theme } from "@/theme";

export function PaginationNav() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const pageItems = [
    { page: 1, title: "Danh sách Component Buttons", count: "12 Components" },
    { page: 2, title: "Danh sách Component Cards", count: "8 Components" },
    { page: 3, title: "Danh sách Component Forms", count: "5 Components" },
    { page: 4, title: "Danh sách Component Navigation", count: "6 Components" },
    { page: 5, title: "Danh sách Component Modals & Dialogs", count: "Sắp ra mắt" },
  ];

  const currentItem = pageItems[currentPage - 1];

  return (
    <div className={`w-full max-w-lg rounded-2xl ${theme.colors.bg.card} ${theme.colors.border.primary} border shadow-md overflow-hidden flex flex-col`}>
      {/* 1. Nội dung trang minh họa thay đổi theo số trang */}
      <div className="p-6 space-y-2 text-center min-h-[120px] flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-indigo-500" />
          <h4 className={`text-sm font-bold ${theme.colors.text.primary}`}>
            {currentItem.title}
          </h4>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">
          Trang {currentPage} / {totalPages} • {currentItem.count}
        </span>
      </div>

      {/* 2. Thanh Pagination Controls ở đáy */}
      <div className={`p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center`}>
        <div className="inline-flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Trang trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? `${theme.colors.bg.button.primary} shadow-sm`
                    : `${theme.colors.text.secondary} hover:bg-slate-200 dark:hover:bg-slate-800`
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="Trang tiếp"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
