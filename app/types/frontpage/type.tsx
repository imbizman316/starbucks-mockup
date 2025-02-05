import { ReactNode } from "react";

export type boxCard = {
  id?: number;
  image: string;
  description: ReactNode;
  position?: "top" | "middle" | "bottom";
  color?: "#f4f3ef" | "#016243";
};
