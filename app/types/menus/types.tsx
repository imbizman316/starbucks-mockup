export interface Toppings {
  milk: number;
  sugar: number;
  cream: number;
}

export interface Coffee {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  count?: number;
  toppings?: Toppings;
}

export interface Category {
  id: string;
  category: string;
  created_at: string;
}

export interface CartCoffee {
  addedId: number;
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  count: number;
  toppings: Toppings;
}

// Type 'CartCoffee | { id: string; coffee: CartCoffee; }' is not assignable to type 'CartCoffee'.
//   Type '{ id: string; coffee: CartCoffee; }' is missing the following properties from type 'CartCoffee': addedId, created_at, name, description, and 5 more.
