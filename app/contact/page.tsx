import { Phone, MapPin, Instagram, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-right max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              تماس با ما
            </h1>
            <p className="text-xl text-gray-600">
              هر زمان که نیاز داشتید، تیم صرافی رویال آماده پاسخ‌گویی به شماست.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Phone Numbers Card */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="mb-4 text-right">
                <Phone className="w-10 h-10 text-[#C4A430] inline-block" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-right">
                شماره تماس
              </h3>

              {/* Force English digits */}
              <div className="flex flex-col gap-3 latin-digits" dir="ltr">
                <a
                  href="tel:5147462716"
                  className="text-gray-700 hover:text-[#C4A430] transition-colors no-underline text-left"
                >
                  514 746 2716
                </a>
                <a
                  href="tel:6478368994"
                  className="text-gray-700 hover:text-[#C4A430] transition-colors no-underline text-left"
                >
                  647 836 8994
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="mb-4 text-right">
                <MapPin className="w-10 h-10 text-[#C4A430] inline-block" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-right">
                آدرس دفتر
              </h3>

              {/* Force English digits */}
              <address
                className="text-gray-700 not-italic leading-relaxed text-left latin-digits"
                dir="ltr"
              >
                7950 Bathurst Street,
                <br />
                Thornhill, Ontario,
                <br />
                Canada, L4J 0L4
              </address>
            </div>

            {/* Social & Messaging Card */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="mb-4 text-right">
                <MessageCircle className="w-10 h-10 text-[#C4A430] inline-block" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-right">
                شبکه‌های ارتباطی
              </h3>

              {/* Force English digits */}
              <div className="flex flex-col gap-3 latin-digits" dir="ltr">
                <a
                  href="https://www.instagram.com/royalexchangeca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#C4A430] transition-colors no-underline text-left"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>https://www.instagram.com/royalexchangeca</span>
                </a>

                <a
                  href="https://t.me/royalexchangeca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#C4A430] transition-colors no-underline text-left"
                >
                  <Send className="w-5 h-5 flex-shrink-0" />
                  <span>https://t.me/royalexchangeca</span>
                </a>

                <a
                  href="https://wa.me/15147462716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#C4A430] transition-colors no-underline text-left"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span>https://wa.me/15147462716</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-right mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              موقعیت مکانی ما
            </h2>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-[400px] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.1234567890!2d-79.4567890!3d43.8123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ4JzQ0LjQiTiA3OcKwMjcnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعیت مکانی صرافی رویال"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






