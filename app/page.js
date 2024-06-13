import fetchProducts from "@/lib/fetchProducts";
import Link from "next/link";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="h-screen">
      <Link href="/products">Products</Link>
    </div>
  );
}
