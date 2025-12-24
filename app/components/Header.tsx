"use client";

import Image from "next/image";
import { Send, Instagram, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-6">
        {/* Mobile Layout */}
        <div className="flex flex-row items-center justify-between py-4 lg:hidden">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black hover:text-[#C4A430] transition-colors"
            aria-label="منو"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo + Brand */}
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

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[73px] z-50 bg-black bg-opacity-50 transition-opacity duration-200" 
            onClick={closeMobileMenu}
          >
            <div
              className="bg-white rounded-t-2xl shadow-xl p-6 max-h-[calc(100vh-73px)] overflow-y-auto transform transition-transform duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <nav className="flex flex-col gap-0 mb-6">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="py-4 px-4 text-right text-lg text-black no-underline transition-colors duration-200 hover:text-[#C4A430] hover:bg-gray-50 rounded-md border-b border-gray-100 first:border-t-0"
                >
                  صفحه اصلی
                </Link>
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="py-4 px-4 text-right text-lg text-black no-underline transition-colors duration-200 hover:text-[#C4A430] hover:bg-gray-50 rounded-md border-b border-gray-100"
                >
                  خدمات
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="py-4 px-4 text-right text-lg text-black no-underline transition-colors duration-200 hover:text-[#C4A430] hover:bg-gray-50 rounded-md border-b border-gray-100"
                >
                  درباره ما
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="py-4 px-4 text-right text-lg text-black no-underline transition-colors duration-200 hover:text-[#C4A430] hover:bg-gray-50 rounded-md border-b border-gray-100"
                >
                  تماس با ما
                </Link>
              </nav>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 pt-4 border-t border-gray-200">
                <a
                  href="https://t.me/royalexchangeca"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="transition-colors hover:text-[#C4A430]"
                >
                  <Send className="w-[22px] h-[22px] cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/royalexchangeca?igsh=MWJnNXlpamhpYm96ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#C4A430]"
                >
                  <Instagram className="w-[22px] h-[22px] cursor-pointer" />
                </a>
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
            </div>
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center py-6">
          
          {/* Left column: Icons */}
          <div className="flex justify-start gap-5">
            <a
              href="https://t.me/royalexchangeca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="transition-colors hover:text-[#C4A430]"
            >
              <Send className="w-[22px] h-[22px] cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/royalexchangeca?igsh=MWJnNXlpamhpYm96ZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-[#C4A430]"
            >
              <Instagram className="w-[22px] h-[22px] cursor-pointer" />
            </a>

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
