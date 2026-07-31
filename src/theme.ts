export const theme = {
  colors: {
    bg: {
      primary: "bg-slate-50 dark:bg-slate-950",
      secondary: "bg-white dark:bg-slate-900/50",
      header: "bg-white/90 dark:bg-slate-900/90",
      drawer: "bg-white dark:bg-slate-900",
      card: "bg-white dark:bg-slate-900/40",
      input: "bg-slate-100 dark:bg-slate-800/80",
      button: {
        primary:
          "bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900",
        secondary:
          "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",
        toggle:
          "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",
        itemActive:
          "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md shadow-slate-900/10 dark:shadow-slate-100/10",
        itemHover:
          "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-slate-200",
      },
      badge: "bg-slate-100 dark:bg-slate-800",
      badgeItem: {
        active:
          "bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900",
        inactive:
          "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
      },
      footerNote: "bg-slate-100 dark:bg-slate-800/50",
      kbd: "bg-slate-200 dark:bg-slate-700",
    },
    text: {
      primary: "text-slate-900 dark:text-slate-100",
      secondary: "text-slate-500 dark:text-slate-400",
      muted: "text-slate-400 dark:text-slate-500",
      accent: "text-slate-900 dark:text-slate-100 font-semibold",
      brand:
        "bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500 bg-clip-text text-transparent",
      kbd: "text-slate-700 dark:text-slate-200",
    },
    border: {
      primary: "border-slate-200 dark:border-slate-800",
      secondary: "border-slate-300 dark:border-slate-700",
      badge: "border-slate-300 dark:border-slate-700",
      input: "border-slate-200 dark:border-slate-700",
    },
  },
  transitions: {
    default: "transition-all duration-300",
    colors: "transition-colors duration-300",
  },
};
