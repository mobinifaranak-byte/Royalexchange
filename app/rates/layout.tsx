import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نرخ ارز | صرافی رویال",
  description: "نرخ‌های به‌روز و شفاف برای معاملات ارزی - صرافی رویال",
};

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

