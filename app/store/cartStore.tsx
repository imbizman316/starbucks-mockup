import { create } from "zustand";
import { CartCoffee } from "../types/menus/types";
import { supabase } from "@/lib/supabase";

type CartStore = {
  // coffeesInCart: Coffee[];
  // coffeesInCart: CartCoffee[];
  // addToCart: (coffee: CartCoffee) => void;
  // removeFromCart: (id: string) => void;
  coffeesInCart: CartCoffee[];
  addToCart: (coffee: CartCoffee, userId: string) => void;
  removeFromCart: (id: string, userId: string) => void;
  loadCartFromDB: (userId: string) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  coffeesInCart: [],
  addToCart: async (coffee, userId) => {
    const existingCart = get().coffeesInCart;

    const newItem = { id: crypto.randomUUID(), coffee };
    set({ coffeesInCart: [...existingCart, newItem] });

    await supabase
      .from("carts")
      .insert({ user_id: userId, coffee_id: coffee.id });

    // set((state) => {
    //   return {
    //     coffeesInCart: [
    //       ...state.coffeesInCart,
    //       { ...coffee, count: 1, addedId: state.coffeesInCart.length + 1 },
    //     ],
    //   };
    // });
  },
  removeFromCart: async (id, userId) => {
    const updatedCart = get().coffeesInCart.filter(
      (item) => item.coffee.id !== id
    );

    set({ coffeesInCart: updatedCart });

    await supabase
      .from("carts")
      .delete()
      .match({ user_id: userId, coffee_id: id });

    // set((state) => ({
    //   coffeesInCart: state.coffeesInCart.filter((coffee) => coffee.id !== id),
    // }));
  },

  loadCartFromDB: async (userId) => {
    const { data, error } = await supabase
      .from("carts")
      .select("*")
      .match({ user_id: userId });

    if (error) {
      console.error("Error fetching cart from DB:", error);
      return;
    }

    const cartItems = data.map((item) => ({
      id: item.id,
      coffee: { id: item.coffee_id },
    }));

    set({ coffeesInCart: cartItems });
  },
}));
