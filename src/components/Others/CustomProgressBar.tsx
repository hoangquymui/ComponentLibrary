import { useState } from "react";
import { CheckCircle2, Upload, Cpu, Wifi } from "lucide-react";

/**
 * CustomProgressBar
 * Custom indicator using explicit role="progressbar" with aria-valuenow,
 * aria-valuemin, aria-valuemax, and aria-label for full accessibility.
 * The visible percentage text matches aria-valuenow exactly (WCAG requirement).
 * Equivalent to SwiftUI: ProgressView(value:total:) with a custom label.
 */

interface StepBarProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  status: "done" | "active" | "pending";
}

const StepBar = ({ label, value, icon, status }: StepBarProps) => {
  const trackColor =
    status === "done"
      ? "bg-emerald-500"
      : status === "active"
      ? "bg-gradient-to-r from-violet-500 via-indigo-500 to-fuchsia-500 animate-pulse"
      : "bg-slate-300 dark:bg-slate-700";

  const textColor =
    status === "done"
      ? "text-emerald-500"
      : status === "active"
      ? "text-violet-500"
      : "text-slate-400 dark:text-slate-500";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`${textColor} transition-colors`}>{icon}</span>
          <span className={`text-xs font-semibold ${textColor} transition-colors`}>
            {label}
          </span>
          {status === "done" && (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          )}
          {status === "active" && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 animate-pulse">
              RUNNING
            </span>
          )}
        </div>

        {/* Visible % — must equal aria-valuenow */}
        <span className={`text-xs tabular-nums font-bold ${textColor}`}>
          {value}%
        </span>
      </div>

      {/* Custom progressbar with full aria */}
      <div className="relative h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200/60 dark:border-slate-700/60">
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${value}%`}
          className={`h-full rounded-full ${trackColor} transition-all duration-700 ease-out`}
          style={{ width: `${value}%` }}
        />
        {/* Shimmer on active */}
        {status === "active" && (
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
          </span>
        )}
      </div>
    </div>
  );
};

export const CustomProgressBar = () => {
  const [phase, setPhase] = useState(0);

  const phases = [
    [
      { label: "Uploading",  value: 100, icon: <Upload className="w-3.5 h-3.5" />, status: "done"    as const },
      { label: "Compiling",  value: 45,  icon: <Cpu    className="w-3.5 h-3.5" />, status: "active"  as const },
      { label: "Deploying",  value: 0,   icon: <Wifi   className="w-3.5 h-3.5" />, status: "pending" as const },
    ],
    [
      { label: "Uploading",  value: 100, icon: <Upload className="w-3.5 h-3.5" />, status: "done"    as const },
      { label: "Compiling",  value: 100, icon: <Cpu    className="w-3.5 h-3.5" />, status: "done"    as const },
      { label: "Deploying",  value: 68,  icon: <Wifi   className="w-3.5 h-3.5" />, status: "active"  as const },
    ],
    [
      { label: "Uploading",  value: 100, icon: <Upload className="w-3.5 h-3.5" />, status: "done"    as const },
      { label: "Compiling",  value: 100, icon: <Cpu    className="w-3.5 h-3.5" />, status: "done"    as const },
      { label: "Deploying",  value: 100, icon: <Wifi   className="w-3.5 h-3.5" />, status: "done"    as const },
    ],
  ];

  const current = phases[phase % phases.length];

  return (
    <div className="w-full max-w-sm space-y-5 p-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          CI / CD Pipeline
        </p>
        <span className="text-[10px] text-slate-400">
          Step {(phase % phases.length) + 1} / {phases.length}
        </span>
      </div>

      <div className="space-y-4">
        {current.map((step) => (
          <StepBar key={step.label} {...step} />
        ))}
      </div>

      <button
        onClick={() => setPhase((p) => p + 1)}
        className="text-xs px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-all duration-200 cursor-pointer w-full"
      >
        {phase % phases.length === phases.length - 1 ? "↺ Restart" : "▶ Next Step"}
      </button>
    </div>
  );
};
