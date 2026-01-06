import { fetchProducts } from "../api/productsApi";

interface Props {
  product: Product;
}

function ProductCards({ product }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded mb-4"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p>${product.price}</p>
      <p className="text-gray-500">{product.category}</p>
    </div>
  );
}

export default ProductCards;
