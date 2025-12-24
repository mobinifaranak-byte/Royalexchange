export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-right max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">
              درباره صرافی رویال
            </h1>

            <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
              
              {/* Highlight belief */}
              <div className="border-r-4 border-black pr-6">
                <p className="font-semibold text-black">
                  باور اولیه این مجموعه ساده و شفاف است:
                </p>
                <p className="mt-2">
                  خدمات مالی باید شفاف، امن و در دسترس باشند.
                </p>
              </div>

              <p>
                در دنیایی که سرعت و اعتماد نقش تعیین‌کننده‌ای دارند، صرافی رویال
                با هدف ارائه تجربه‌ای متفاوت در حوزه خدمات ارزی و مالی شکل گرفته است؛
                تجربه‌ای که در آن <span className="font-medium text-black">
                امنیت، دقت و احترام به مشتری
                </span> در اولویت قرار دارد.
              </p>

              <p>
                این مجموعه با اتکا به تیمی متخصص، دارای تجربه بین‌المللی و شناخت عمیق
                از بازارهای مالی، و با بهره‌گیری از فناوری‌های به‌روز و استانداردهای
                حرفه‌ای، تلاش می‌کند فرآیندهای پیچیده مالی را به شکلی ساده،
                شفاف و قابل اطمینان ارائه دهد.
              </p>

              {/* Quote-style emphasis */}
              <div className="bg-gray-50 rounded-xl p-6 text-black font-medium">
                صرافی رویال صرفاً یک ارائه‌دهنده خدمات نیست؛  
                بلکه شریکی قابل اعتماد در مسیر تصمیم‌گیری‌های مالی آگاهانه است.
              </div>

              <p>
                شفافیت در نرخ‌ها، سرعت در انجام خدمات و پاسخ‌گویی مسئولانه،
                اصولی هستند که به‌صورت مستمر در این مجموعه رعایت می‌شوند،
                چرا که اعتماد، ارزشمندترین سرمایه در روابط مالی بلندمدت است.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
