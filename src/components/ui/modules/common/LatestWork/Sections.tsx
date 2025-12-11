// components/Sections.tsx
import { ReactNode } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export interface SlideSection {
  id: number;
  content: ReactNode;
}
export const sections: SlideSection[] = [
  {
    id: 1,
    content: <SectionOne />,
  },
  {
    id: 2,
    content: <SectionTwo />,
  },
  // Add more...
];