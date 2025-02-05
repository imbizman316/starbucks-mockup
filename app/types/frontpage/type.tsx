import { ReactNode } from "react";

export type boxCard = {
  image: string;
  description: ReactNode;
  position: "top" | "middle" | "bottom";
};
