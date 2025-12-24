import { Banknote, Send, TrendingUp, ArrowLeftRight, ShieldCheck, MessageCircle, Headphones } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "خرید و فروش اسکناس ارز",
    description: "خرید و فروش انواع اسکناس‌های ارزی با بهترین نرخ‌های روز بازار",
  },
  {
    icon: Send,
    title: "انتقال حواله ارزی",
    description: "انتقال سریع و امن حواله‌های ارزی به سراسر جهان با کمترین کارمزد",
  },
  {
    icon: TrendingUp,
    title: "اعلام نرخ لحظه‌ای",
    description: "دسترسی به نرخ‌های لحظه‌ای ارزها و اطلاع از تغییرات بازار",
  },
  {
    icon: ArrowLeftRight,
    title: "تبدیل ارزها به یکدیگر",
    description: "تبدیل آسان و سریع انواع ارزهای خارجی به یکدیگر",
  },
  {
    icon: ShieldCheck,
    title: "تسویه شفاف و مطمئن",
    description: "تسویه حساب سریع و شفاف با بالاترین استانداردهای امنیتی",
  },
  {
    icon: MessageCircle,
    title: "مشاوره در انتخاب روش انتقال",
    description: "مشاوره تخصصی برای انتخاب بهترین روش انتقال ارزی",
  },
  {
    icon: Headphones,
    title: "پشتیبانی سریع و مطمئن",
    description: "پشتیبانی 24 ساعته برای پاسخگویی به تمام سوالات شما",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-right max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              خدمات صرافی رویال
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              راهکارهای سریع، شفاف و امن برای تبادلات ارزی شما
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
              <a
                href="/contact"
                className="flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium no-underline hover:bg-gray-800 transition-colors text-right"
              >
                تماس با ما
              </a>
              <a
                href="/"
                className="flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-black rounded-md font-medium no-underline hover:border-gray-400 hover:bg-gray-50 transition-colors text-right"
              >
                مشاهده نرخ ارز
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm text-right hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}









