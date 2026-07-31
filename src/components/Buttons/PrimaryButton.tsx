import { theme } from "@/theme";

export function PrimaryButton() {
  return (
    <button
      className={`px-6 py-3 rounded-xl ${theme.colors.bg.button.primary} ${theme.transitions.default} cursor-pointer font-medium text-sm shadow-sm hover:shadow-md active:scale-[0.98]`}
    >
      Primary Button
    </button>
  );
}
