"use client"; 
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // اگر دارید

export default function Navbar() {
  const { cart } = useCart();

  // جمع کل تعداد اقلام
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          فروشگاه
        </Link>

        <div className="relative">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <span>سبد خرید</span>
          </Link>
          {totalQuantity > 0 && (
            <span
              className="
                absolute -top-2 -right-3 
                bg-red-600 text-white 
                text-xs w-5 h-5 
                flex items-center justify-center 
                rounded-full
              "
            >
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
