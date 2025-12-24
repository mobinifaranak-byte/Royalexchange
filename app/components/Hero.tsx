export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right column: Main content */}
          <div className="flex flex-col gap-6 lg:order-1 text-right">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight text-right">
                صرافی رویال
              </h1>
              <h2 className="text-2xl md:text-3xl font-normal text-gray-700 leading-tight text-right">
                همراه امین شما در تبادلات ارزی
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed text-right">
              صرافی رویال با سال‌ها تجربه در زمینه خرید و فروش ارز و حواله‌های بین‌المللی، 
              همراه مطمئن شما در تمامی معاملات ارزی است. ما با شفافیت کامل و بالاترین 
              استانداردهای امنیتی، خدمات حرفه‌ای را به شما ارائه می‌دهیم.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4">
              <a
                href="/rates"
                className="flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium no-underline hover:bg-gray-800 transition-colors text-right"
              >
                مشاهده نرخ ارز
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-black rounded-md font-medium no-underline hover:border-gray-400 hover:bg-gray-50 transition-colors text-right"
              >
                تماس با ما
              </a>
            </div>
          </div>

          {/* Left column: Info cards */}
          <div className="flex flex-col gap-6 lg:order-2">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm text-right">
              <h3 className="text-xl font-bold text-black mb-3 text-right">خرید و فروش ارز</h3>
              <p className="text-gray-600 leading-relaxed text-right">
                خرید و فروش انواع ارزهای رایج با بهترین نرخ‌ها و سریع‌ترین زمان ممکن
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm text-right">
              <h3 className="text-xl font-bold text-black mb-3 text-right">حواله بین‌المللی</h3>
              <p className="text-gray-600 leading-relaxed text-right">
                ارسال و دریافت حواله‌های بین‌المللی به سراسر جهان با امنیت و سرعت بالا
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm text-right">
              <h3 className="text-xl font-bold text-black mb-3 text-right">امنیت و شفافیت</h3>
              <p className="text-gray-600 leading-relaxed text-right">
                تمامی معاملات با بالاترین استانداردهای امنیتی و شفافیت کامل انجام می‌شود
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

