export default async function getAllProducts() {
  const result = await fetch("https://dummyjson.com/products?limit=10", {
    next: {
      revalidate: 10,
    },
  });
  if (!result.ok) {
    throw new Error("there was and problem");
  }
  return result.json();
}
export async function getSingleProduct(id) {
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  if (!result.ok) {
    throw new Error("there was and problem");
  }
  return result.json();
}
