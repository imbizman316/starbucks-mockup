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
