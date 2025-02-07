export interface Coffee {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  category: string;
  created_at: string;
}
