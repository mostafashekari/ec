// src/components/Hero.jsx

export default function Hero() {
    return (
      <section className="relative w-full h-[400px] sm:h-[500px] mb-8">
        {/* تصویر پس‌زمینه */}
        <div
          className="
            absolute inset-0 
            bg-[url('/images/hero-bg.jpg')]   /* جایگزین با آدرس تصویر خودتان */
            bg-cover bg-center 
            "
        ></div>
  
        {/* Overlay نیمه‌شفاف */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* محتوای اصلی */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full p-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">فروشگاه تخصصی برنامه‌نویسی</h1>
          <p className="text-base sm:text-lg max-w-xl mb-6">
            کتاب‌های تخصصی، محصولات آموزشی، و هر چیزی که برای یادگیری نیاز دارید.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-2 rounded text-sm sm:text-base">
            مشاهده محصولات
          </button>
        </div>
      </section>
    );
  }
  