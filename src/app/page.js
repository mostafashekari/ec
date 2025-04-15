import Hero from "@/components/Hero";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">فروشگاه ما</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

