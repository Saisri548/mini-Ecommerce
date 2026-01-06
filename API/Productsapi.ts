// src/api/productsApi.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://fakestoreapi.com/products"); 
    if (!res.ok) throw new Error("Failed to fetch products");

    const data: Product[] = await res.json(); 
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
