import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function ButtonGroup() {
  const [count, setCount] = useState(1);

  return (
    <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-1 shadow-sm">
      <button
        onClick={() => setCount((prev) => Math.max(1, prev - 1))}
        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer active:scale-90"
        title="Giảm"
      >
        <Minus className="w-4 h-4" />
      </button>

      <span className="px-4 text-xs font-semibold text-slate-800 dark:text-slate-200 min-w-[2rem] text-center select-none">
        {count}
      </span>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer active:scale-90"
        title="Tăng"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
