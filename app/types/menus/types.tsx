export interface Coffee {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image: string | null;
  category: string;
}

export interface Category {
  id: string;
  category: string;
  created_at: string;
}
