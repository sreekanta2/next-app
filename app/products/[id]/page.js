import getAllProducts, { getSingleProduct } from "@/lib/fetchProducts";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await getSingleProduct(id);
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function page({ params }) {
  const { id } = params;
  const product = await getSingleProduct(id);

  return (
    <div className="max-w-lg mx-auto border bg-gray-400 p-4">
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
        />
      </div>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>

      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.brand}</p>
      <p>{product.id}</p>
    </div>
  );
}
export async function generateStaticParams() {
  const { products } = await getAllProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
