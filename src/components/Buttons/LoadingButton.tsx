import { Loader2 } from "lucide-react";

export function LoadingButton() {
  return (
    <button
      disabled
      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-medium text-sm cursor-not-allowed opacity-85 shadow-sm"
    >
      <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
      <span>Đang xử lý...</span>
    </button>
  );
}
