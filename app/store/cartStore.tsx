import { create } from "zustand";
import { Coffee } from "../types/menus/types";

type CartStore = {
  coffeesInCart: Coffee[];
  addToCart: (coffee: Coffee) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  coffeesInCart: [],
  addToCart: (coffee) => {
    set((state) => ({
      coffeesInCart: [...state.coffeesInCart, coffee],
    }));
  },
}));

// import { create } from "zustand";
// import { Coffee } from "../types/menus/types";

// type CoffeeStore = {
//   coffees: Coffee[];
//   fetchCoffees: () => Promise<void>;
// };

// export const useCoffeeStore = create<CoffeeStore>((set) => ({
//   coffees: [],
//   fetchCoffees: async () => {
//     try {
//       const response = await fetch("/api/getCoffee");

//       if (!response.ok) {
//         throw new Error("Failed to fetch coffee menu");
//       }

//       const data = await response.json();
//       set({ coffees: data });
//     } catch (error) {
//       console.error("Error fetching coffee menu:", error);
//     }
//   },
// }));
