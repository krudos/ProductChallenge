export interface Category {
  id: number;
  name: string;
  image: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  name: string;
  id: string;
  productIds: number[];
}

export interface Brand {
  name: string;
}

export interface Product {
  name: string;
  brand: Brand;
  price: number;
  id: string;
}
