"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Rates = {
  updatedAtISO: string;
  unit: "تومان";
  cad_sell_cash: number;
  cad_sell_cheque: number;
  cad_buy_cash: number;
  cad_buy_etransfer: number;
};

// Format number with thousands separator and Persian digits
function formatNumber(num: number): string {
  return num.toLocaleString("fa-IR");
}

// Format date/time in Toronto timezone
function formatTorontoDateTime(isoString: string): string {
  const date = new Date(isoString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Toronto",
  };

  try {
    return new Intl.DateTimeFormat("fa-IR", options).format(date);
  } catch {
    // Fallback formatting
    const torontoDate = new Date(date.toLocaleString("en-US", { timeZone: "America/Toronto" }));
    return torontoDate.toLocaleString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Toronto",
    });
  }
}

export default function RatesPage() {
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/rates", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("خطا در دریافت نرخ‌ها");
      }

      const data: Rates = await response.json();
      setRates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطای نامشخص");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();

    // Auto-refresh every 60 seconds
    const interval = setInterval(() => {
      fetchRates();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const rateItems = [
    { label: "فروش دلار کانادا نقدی", value: rates?.cad_sell_cash || 0 },
    { label: "فروش دلار کانادا با چک/رسید", value: rates?.cad_sell_cheque || 0 },
    { label: "خرید دلار کانادا نقدی", value: rates?.cad_buy_cash || 0 },
    { label: "خرید دلار کانادا دایرکت ترنسفر", value: rates?.cad_buy_etransfer || 0 },
  ];

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-right max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              نرخ ارز
            </h1>
            <p className="text-xl text-gray-600">
              نرخ‌های به‌روز و شفاف برای معاملات ارزی شما
            </p>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {loading && !rates && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">در حال بارگذاری نرخ‌ها...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={fetchRates}
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                تلاش مجدد
              </button>
            </div>
          )}

          {rates && (
            <>
              {/* Last Updated */}
              <div className="text-right mb-8">
                <p className="text-sm text-gray-600">
                  آخرین به‌روزرسانی: {formatTorontoDateTime(rates.updatedAtISO)}
                </p>
              </div>

              {/* Rates Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-black text-right">
                    نرخ‌های دلار کانادا
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {rateItems.map((item, index) => (
                    <div
                      key={index}
                      className="px-6 py-4 flex justify-between items-center"
                    >
                      <div className="text-right">
                        <p className="text-gray-700 font-medium">{item.label}</p>
                      </div>
                      <div className="text-left">
                        <p className="text-lg font-bold text-black">
                          {formatNumber(item.value)} {rates.unit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 rounded-lg p-4 mb-8 text-right">
                <p className="text-sm text-gray-600">
                  نرخ‌ها به‌صورت لحظه‌ای به‌روزرسانی می‌شوند و ممکن است تغییر کنند. برای دریافت نرخ نهایی و انجام معامله، لطفاً با صرافی رویال تماس بگیرید.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium no-underline hover:bg-gray-800 transition-colors"
                >
                  تماس برای دریافت نرخ
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
