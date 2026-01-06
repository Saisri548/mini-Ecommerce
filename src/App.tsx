import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import { fetchProducts } from "./api/productsApi";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Mini E-Commerce</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ProductList
        products={products}
        search={search}
        category={category}
      />
    </div>
  );
}

export default App;
