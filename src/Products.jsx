import ProductCard from "./ProductCard";

export default function Products({ products, setProducts }) {
  function handleDelete(productId) {
    let newProducts = structuredClone(products);
    newProducts = newProducts.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
}
