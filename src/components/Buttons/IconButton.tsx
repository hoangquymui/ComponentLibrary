import { Heart } from "lucide-react";
import { useState } from "react";

export function IconButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      aria-label="Like"
      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer active:scale-90 ${
        liked
          ? "bg-rose-500/10 border-rose-500/30 text-rose-500 shadow-sm"
          : "bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400"
      }`}
    >
      <Heart className={`w-5 h-5 transition-transform ${liked ? "fill-rose-500 scale-110" : ""}`} />
    </button>
  );
}
