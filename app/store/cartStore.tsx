import { create } from "zustand";
import { Coffee } from "../types/menus/types";

type CartStore = {
  coffeesInCart: Coffee[];
  addToCart: (coffee: Coffee) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  coffeesInCart: [],
  addToCart: (coffee) => {
    set((state) => {
      const existingCoffee = state.coffeesInCart.find(
        (c) => c.id === coffee.id
      );

      if (existingCoffee) {
        return {
          coffeesInCart: state.coffeesInCart.map((c) =>
            c.id === coffee.id && c.count ? { ...c, count: c.count + 1 } : c
          ),
        };
      } else {
        return {
          coffeesInCart: [...state.coffeesInCart, { ...coffee, count: 1 }],
        };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => ({
      coffeesInCart: state.coffeesInCart.filter((coffee) => coffee.id !== id),
    }));
  },
}));
