import Product from "@/components/Product";
import getAllProducts from "@/lib/fetchProducts";

export default async function Products() {
  const { products } = await getAllProducts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
