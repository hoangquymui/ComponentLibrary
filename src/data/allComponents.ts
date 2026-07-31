import { BUTTON_COMPONENTS } from "@/data/buttonsData";
import { CARD_COMPONENTS } from "@/data/cardsData";
import { FORM_COMPONENTS } from "@/data/formsData";
import { NAVIGATION_COMPONENTS } from "@/data/navigationComponentsData";
import { OTHERS_COMPONENTS } from "@/data/othersData";
import type { ComponentDetailItem } from "@/types/componentDetail";

export const ALL_COMPONENTS: ComponentDetailItem[] = [
  ...BUTTON_COMPONENTS,
  ...CARD_COMPONENTS,
  ...FORM_COMPONENTS,
  ...NAVIGATION_COMPONENTS,
  ...OTHERS_COMPONENTS,
];

export function getComponentById(id: string): ComponentDetailItem | undefined {
  return ALL_COMPONENTS.find((item) => item.id === id);
}
