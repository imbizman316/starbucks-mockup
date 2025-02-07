import { create } from "zustand";
import { Category } from "../types/menus/types";

type CategoriesStore = {
  categories: Category[];
  fetchCategories: () => Promise<void>;
};

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const response = await fetch("/api/getCategories");

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      set({ categories: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },
}));
