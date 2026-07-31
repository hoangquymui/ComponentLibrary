import type { ComponentType } from "react";
import { Sparkles, Box, CheckSquare, LayoutGrid } from "lucide-react";
import type { LucideProps } from "lucide-react";
import { BUTTON_COMPONENTS } from "@/data/buttonsData";
import { CARD_COMPONENTS } from "@/data/cardsData";
import { FORM_COMPONENTS } from "@/data/formsData";
import { NAVIGATION_COMPONENTS } from "@/data/navigationComponentsData";

export type TabCategory = "buttons" | "cards" | "forms" | "navigation";

export interface MenuItem {
  id: TabCategory;
  path: string;
  label: string;
  description: string;
  icon: ComponentType<LucideProps>;
  count: number;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "buttons",
    path: "/buttons",
    label: "Buttons & Badges",
    description: `Bộ sưu tập ${BUTTON_COMPONENTS.length} loại nút bấm và nhãn đẹp mắt với hiệu ứng chuyển đổi mượt mà.`,
    icon: Sparkles,
    get count() {
      return BUTTON_COMPONENTS.length;
    },
  },
  {
    id: "cards",
    path: "/cards",
    label: "Cards & Containers",
    description: "Thẻ thông tin, profile card phong cách Glassmorphic hiện đại.",
    icon: Box,
    get count() {
      return CARD_COMPONENTS.length;
    },
  },
  {
    id: "forms",
    path: "/forms",
    label: "Forms & Inputs",
    description: "Mẫu ô nhập dữ liệu, form đăng nhập chuẩn UI/UX.",
    icon: CheckSquare,
    get count() {
      return FORM_COMPONENTS.length;
    },
  },
  {
    id: "navigation",
    path: "/navigation",
    label: "Navigation & Bars",
    description: "Thanh điều hướng, Hamburger Menu & Off-canvas Drawer.",
    icon: LayoutGrid,
    get count() {
      return NAVIGATION_COMPONENTS.length;
    },
  },
];
