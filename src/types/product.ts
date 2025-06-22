export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    rating: number;
    stock: number;
    discountPercentage: number;
    brand?: string;
  }
  