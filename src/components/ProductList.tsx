import { useMemo } from "react";
import { fetchProducts } from "../api/productsApi";
import ProductCards from "./ProductCards";

interface Props {
  products: Product[];
  search: string;
  category: string;
}

function ProductList({ products, search, category }: Props) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchedSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchedCategory = category
        ? product.category === category
        : true;

      return matchedSearch && matchedCategory;
    });
  }, [products, search, category]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredProducts.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
