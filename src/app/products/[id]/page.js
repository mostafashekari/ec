import { products } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound(); // به جای return <div>محصول یافت نشد</div>
  }

  return <ProductDetailClient product={product} />;
}
