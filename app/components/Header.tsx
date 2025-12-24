import Image from "next/image";
import { Send, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 items-center py-6">
          
          {/* Left column: Icons */}
          <div className="flex justify-start gap-5">
  {/* Telegram */}
  <a
    href="https://t.me/royalexchangeca"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
    className="transition-colors hover:text-[#C4A430]"
  >
    <Send className="w-[22px] h-[22px] cursor-pointer" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/royalexchangeca?igsh=MWJnNXlpamhpYm96ZA=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition-colors hover:text-[#C4A430]"
  >
    <Instagram className="w-[22px] h-[22px] cursor-pointer" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/15147462716"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="transition-colors hover:text-[#C4A430]"
  >
    <Phone className="w-[22px] h-[22px] cursor-pointer" />
  </a>
</div>


{/* Center column: Menu */}
<nav className="flex justify-center gap-10 flex-row-reverse">
  <Link
    href="/"
    className="text-black no-underline transition-colors duration-200 hover:text-[#C4A430]"
  >
    صفحه اصلی
  </Link>

  <Link
    href="/services"
    className="text-black no-underline transition-colors duration-200 hover:text-[#C4A430]"
  >
    خدمات
  </Link>

  <Link
    href="/about"
    className="text-black no-underline transition-colors duration-200 hover:text-[#C4A430]"
  >
    درباره ما
  </Link>

  <Link
    href="/contact"
    className="text-black no-underline transition-colors duration-200 hover:text-[#C4A430]"
  >
    تماس با ما
  </Link>
</nav>


          {/* Right column: Logo + Brand name */}
          <div className="flex justify-end">
            <Link
              href="/"
              className="flex flex-row-reverse items-center gap-4 no-underline cursor-pointer transition-opacity hover:opacity-90"
              aria-label="صفحه اصلی"
            >
              <Image
                src="/logo.png"
                alt="Royal Exchange Logo"
                width={72}
                height={72}
                className="h-12 w-12 object-contain scale-110"
                priority
              />

              <div className="flex flex-col gap-1 text-right">
                <span className="text-lg font-bold leading-tight text-black">
                  صرافی رویال
                </span>
                <span className="text-sm text-gray-600 leading-tight">
                  همراه امین شما در معاملات و تبادلات ارزی
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* Gold border line */}
      <div className="h-[2px] bg-[#C4A430]"></div>
    </header>
  );
}
