"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} با موفقیت به سبد اضافه شد!`);
    setQuantity(1); // ریست به مقدار اولیه پس از افزودن
  };

  return (
    <div className="group border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow relative">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.price} تومان</p>

        {/* کنترل شمارنده برای انتخاب تعداد */}
        <div className="flex items-center gap-2 my-2">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            -
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={increment}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            +
          </button>
        </div>

        {/* دکمه افزودن به سبد با تعداد انتخاب‌شده */}
        <button
          onClick={handleAddToCart}
          className="mt-2 inline-block bg-blue-600 text-white text-sm px-3 py-1.5 rounded hover:bg-blue-700 transition-colors"
        >
          افزودن به سبد
        </button>
        
        {/* لینک مشاهده جزئیات محصول */}
        <Link
          href={`/products/${product.id}`}
          className="mt-2 inline-block text-blue-600 hover:underline text-sm"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
}
