import { Check } from "lucide-react";
import { useState } from "react";

export function FloatingActionButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`relative p-4 rounded-full text-white font-semibold shadow-xl transition-all duration-300 cursor-pointer active:scale-95 ${
        active
          ? "bg-emerald-600 shadow-emerald-600/40 rotate-180"
          : "bg-indigo-600 shadow-indigo-600/40 hover:bg-indigo-500 hover:scale-105"
      }`}
      title="Floating Action Button"
    >
      <Check className="w-6 h-6" />
    </button>
  );
}
