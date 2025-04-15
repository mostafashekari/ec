"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

export default function CartPage() {
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  // محاسبه جمع کل سفارش
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (id) => {
    incrementQuantity(id);
    toast.success("تعداد محصول افزایش یافت!");
  };

  const handleDecrement = (id) => {
    decrementQuantity(id);
    toast.success("تعداد محصول کاهش یافت!");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">سبد خرید</h1>

      {cart.length === 0 ? (
        <p>سبد خرید خالی است</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    قیمت واحد: {item.price} تومان
                  </p>
                  <p className="text-gray-600 text-sm">
                    جمع: {item.price * item.quantity} تومان
                  </p>
                </div>
              </div>
              {/* دکمه‌های افزایش و کاهش تعداد همراه با اعلان Toast */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded transition-colors hover:bg-red-700"
                >
                  –
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-green-600 text-white px-2 py-1 rounded transition-colors hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">
            جمع فاکتور: {totalPrice} تومان
          </div>

          <div className="mt-6 text-right">
            <Link
              href="/checkout"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              ادامه به پرداخت
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
