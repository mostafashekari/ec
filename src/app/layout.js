import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";  // اضافه کردن Toaster

const vazirFont = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={vazirFont.variable}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" />  {/* اکنون اعلان‌های toast در کل سایت در دسترس هستند */}
        </CartProvider>
      </body>
    </html>
  );
}
