import { NextResponse } from "next/server";
import { getPricingCatalog } from "@/lib/lemonsqueezy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
};

export async function GET() {
  const catalog = await getPricingCatalog();
  return NextResponse.json(catalog, { headers: responseHeaders });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: responseHeaders });
}
