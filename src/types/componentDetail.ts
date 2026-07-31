import type { ReactNode } from "react";

export interface ComponentDetailItem {
  id: string;
  category: "buttons" | "cards" | "forms" | "navigation";
  title: string;
  description: string;
  component: ReactNode;
  prompt: string;
}
