/**
 * IndeterminateSpinner
 * Use when the remaining work is unknown — no percentage, no endpoint.
 * Equivalent to SwiftUI: ProgressView() with no value.
 */
export const IndeterminateSpinner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 py-1"
      aria-label="Loading"
    >
      {/* Main indeterminate spinner */}
      <div
        role="progressbar"
        aria-label="Loading, please wait"
        aria-busy="true"
        className="relative w-10 h-10"
      >
        <span className="absolute inset-0 rounded-full border-[3px] border-slate-200 dark:border-slate-700" />
        <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-violet-500 border-r-violet-400 animate-spin" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
        </span>
      </div>

      {/* Label */}
      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
        Đang xử lý...
      </p>

      {/* Size variants row */}
      <div className="flex items-center gap-3 pt-1.5 border-t border-slate-200 dark:border-slate-800 w-full justify-center">
        {[
          { size: "w-4 h-4", border: "border-2",     color: "border-t-violet-500"  },
          { size: "w-5 h-5", border: "border-[3px]", color: "border-t-indigo-500"  },
          { size: "w-7 h-7", border: "border-[3px]", color: "border-t-fuchsia-500" },
        ].map((s, i) => (
          <div
            key={i}
            role="progressbar"
            aria-label="Loading"
            aria-busy="true"
            className={`relative ${s.size}`}
          >
            <span className={`absolute inset-0 rounded-full ${s.border} border-slate-200 dark:border-slate-700`} />
            <span
              className={`absolute inset-0 rounded-full ${s.border} border-transparent ${s.color} animate-spin`}
              style={{ animationDelay: `${i * 150}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
