import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className="border border-red-700 bg-red-400 p-6">
      <Image alt="Mountains" src={product.thumbnail} width={400} height={400} />
      <div>
        <Link href={`products/${product.id}`}>
          {" "}
          <h1>{product.title}</h1>
        </Link>

        <p>{product.price}</p>
      </div>
    </div>
  );
}
