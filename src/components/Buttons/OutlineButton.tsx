import { theme } from "@/theme";

export function OutlineButton() {
  return (
    <button
      className={`px-6 py-3 rounded-xl border ${theme.colors.border.secondary} ${theme.colors.text.primary} hover:bg-slate-100 dark:hover:bg-slate-800 ${theme.transitions.default} cursor-pointer font-medium text-sm active:scale-[0.98]`}
    >
      Outline Button
    </button>
  );
}
