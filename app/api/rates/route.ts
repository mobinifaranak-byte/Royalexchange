import { NextResponse } from "next/server";

type Rates = {
  updatedAtISO: string;
  unit: "تومان";
  cad_sell_cash: number;
  cad_sell_cheque: number;
  cad_buy_cash: number;
  cad_buy_etransfer: number;
};

function defaultRates(): Rates {
  return {
    updatedAtISO: new Date().toISOString(),
    unit: "تومان",
    cad_sell_cash: 0,
    cad_sell_cheque: 0,
    cad_buy_cash: 0,
    cad_buy_etransfer: 0,
  };
}

export async function GET() {
  try {
    // Dynamic import so local dev doesn't break if KV env is missing
    const { kv } = await import("@vercel/kv");

    const data = await kv.get<Rates>("rates:cad");
    const rates = data ?? defaultRates();

    return NextResponse.json(rates, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    // Fallback (local dev / KV not configured)
    return NextResponse.json(defaultRates(), {
      headers: { "Cache-Control": "no-store" },
      status: 200,
    });
  }
}
