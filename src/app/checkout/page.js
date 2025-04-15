"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Toaster, toast } from "react-hot-toast";

export default function CheckoutPage() {
  const { cart } = useCart();

  // محاسبه جمع کل قیمت سفارش
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // اعتبارسنجی ساده: اطمینان از پر بودن همه فیلدها
    if (
      !shippingInfo.fullName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address
    ) {
      toast.error("لطفاً تمام فیلدهای مورد نیاز را پر کنید.");
      return;
    }
    setSubmitting(true);
    // شبیه‌سازی درخواست API (مثلاً ۱ ثانیه)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    toast.success("سفارش شما ثبت شد!");
    // در صورت تمایل: پاکسازی فرم یا سبد خرید
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* توستر برای نمایش اعلان‌ها در این صفحه هم به صورت محلی قرار دارد؛ همچنین در RootLayout نیز قرار داده‌اید */}
      <Toaster position="bottom-right" />

      <h1 className="text-2xl font-bold mb-6">تسویه‌حساب</h1>

      {/* بخش خلاصه سفارش */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">خلاصه سفارش</h2>
        {cart.length === 0 ? (
          <p>سبد خرید خالی است.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <p className="font-medium">
                  {item.name} × {item.quantity}
                </p>
                <p className="text-gray-600">
                  {item.price * item.quantity} تومان
                </p>
              </div>
            ))}
            <div className="text-right font-bold text-lg mt-4">
              جمع فاکتور: {totalPrice} تومان
            </div>
          </div>
        )}
      </section>

      {/* فرم اطلاعات ارسال */}
      <section>
        <h2 className="text-xl font-semibold mb-2">اطلاعات ارسال</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="fullName" className="block font-medium mb-1">
              نام و نام خانوادگی:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              ایمیل:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              placeholder="example@example.com"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              شماره تماس:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              placeholder="0912xxxxxxx"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="address" className="block font-medium mb-1">
              آدرس:
            </label>
            <textarea
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              placeholder="آدرس دقیق خود را وارد کنید"
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className={`bg-blue-600 text-white px-4 py-2 rounded transition-colors ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {submitting ? "در حال ثبت سفارش..." : "ثبت سفارش و پرداخت"}
          </button>
        </form>
      </section>
    </main>
  );
}
