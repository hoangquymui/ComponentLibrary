import { Trash2 } from "lucide-react";

export function DangerButton() {
  return (
    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-medium text-sm shadow-md shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-200 cursor-pointer active:scale-[0.98]">
      <Trash2 className="w-4 h-4" />
      <span>Xóa dữ liệu</span>
    </button>
  );
}
