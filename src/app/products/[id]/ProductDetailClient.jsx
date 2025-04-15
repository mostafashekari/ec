"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>محصول یافت نشد!</div>;
  }

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} با موفقیت به سبد اضافه شد!`);
    setQuantity(1); // ریست شمارنده پس از افزودن
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.price} تومان</p>
      
      {/* کنترل تعداد انتخاب شده */}
      <div className="flex items-center gap-2 my-4">
        <button 
          onClick={decrement} 
          className="bg-red-600 text-white px-2 py-1 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button 
          onClick={increment} 
          className="bg-green-600 text-white px-2 py-1 rounded"
        >
          +
        </button>
      </div>
      
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        افزودن به سبد
      </button>
      
      <p className="mt-4 text-sm text-gray-700">{product.description}</p>
    </main>
  );
}
