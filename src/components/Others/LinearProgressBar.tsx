import { useState, useEffect } from "react";

/**
 * LinearProgressBar
 * Uses the native HTML <progress> element for linear determinate progress.
 * Best when there is room for a readable horizontal track.
 * Equivalent to SwiftUI: ProgressView(value: progress, total: 100).progressViewStyle(.linear)
 * The native <progress> provides built-in ARIA semantics (role="progressbar" implicitly).
 */

interface LinearBarProps {
  value: number;     // 0–100
  label: string;
  color: string;     // Tailwind gradient class
  delay?: number;    // ms to start animating in demo
}

const LinearBar = ({ value, label, color, delay = 0 }: LinearBarProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setCurrent(value), delay + 300);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] font-medium">
        <span className="text-slate-600 dark:text-slate-300">{label}</span>
        <span className="tabular-nums text-slate-400 dark:text-slate-500">{current}%</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${current}%`}
          className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
          style={{ width: `${current}%` }}
        />
      </div>
    </div>
  );
};

export const LinearProgressBar = () => {
  const [key, setKey] = useState(0);

  const bars = [
    { label: "TypeScript",  value: 92, color: "bg-gradient-to-r from-blue-500 to-indigo-500",   delay: 0   },
    { label: "React",       value: 87, color: "bg-gradient-to-r from-cyan-400 to-blue-500",      delay: 120 },
    { label: "Tailwind CSS",value: 95, color: "bg-gradient-to-r from-violet-500 to-fuchsia-500", delay: 240 },
    { label: "Node.js",     value: 74, color: "bg-gradient-to-r from-emerald-400 to-teal-500",   delay: 360 },
    { label: "Go",          value: 48, color: "bg-gradient-to-r from-amber-400 to-orange-500",   delay: 480 },
  ];

  return (
    <div key={key} className="w-full max-w-xs space-y-2 px-1 py-0.5">
      <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
        Skill Proficiency
      </p>

      {bars.map((bar) => (
        <LinearBar key={bar.label} {...bar} />
      ))}

      <button
        onClick={() => setKey((k) => k + 1)}
        className="text-[11px] px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-200 cursor-pointer w-full"
      >
        ↺ Replay
      </button>
    </div>
  );
};
