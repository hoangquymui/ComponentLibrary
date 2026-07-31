import { useState, useEffect } from "react";

/**
 * DeterminateProgressRing
 * Compact SVG circular arc that fills toward completion.
 * Use when progress percentage is known and a ring shape fits the layout.
 * Equivalent to SwiftUI: ProgressView(value: progress, total: 1.0) styled as a gauge.
 * Uses role="progressbar" with aria-valuenow / aria-valuemin / aria-valuemax.
 */

interface ProgressRingProps {
  value: number;       // 0–100
  size?: number;       // px
  strokeWidth?: number;
  color?: string;
  label?: string;
}

const ProgressRing = ({
  value,
  size = 56,
  strokeWidth = 5,
  color = "#8b5cf6",
  label = "",
}: ProgressRingProps) => {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || `Progress: ${value}%`}
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-200 dark:text-slate-700"
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-in-out"
        />
      </svg>
      {/* Center label */}
      <span className="absolute text-[10px] font-bold text-slate-700 dark:text-slate-200 tabular-nums">
        {value}%
      </span>
    </div>
  );
};

export const DeterminateProgressRing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(78), 400);
    return () => clearTimeout(t);
  }, []);

  const handleReset = () => {
    setProgress(0);
    setTimeout(() => setProgress(78), 400);
  };

  const rings = [
    { value: progress,                    color: "#8b5cf6", label: "Upload" },
    { value: Math.round(progress * 0.64), color: "#6366f1", label: "Build"  },
    { value: Math.round(progress * 0.41), color: "#a855f7", label: "Deploy" },
  ];

  return (
    <div className="flex flex-col items-center gap-3 w-full py-1">
      {/* Ring row — 3 rings compact */}
      <div className="flex items-center justify-center gap-4">
        {rings.map((ring) => (
          <div key={ring.label} className="flex flex-col items-center gap-1.5">
            <ProgressRing
              value={ring.value}
              size={56}
              strokeWidth={5}
              color={ring.color}
              label={ring.label}
            />
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
              {ring.label}
            </span>
          </div>
        ))}
      </div>

      {/* Replay button */}
      <button
        onClick={handleReset}
        className="text-[11px] px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-200 cursor-pointer"
      >
        ↺ Replay
      </button>
    </div>
  );
};
