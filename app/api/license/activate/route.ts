import { NextResponse } from "next/server";
import { proxyLemonLicenseRequest } from "@/app/api/license/_lib";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    return await proxyLemonLicenseRequest(request, "activate");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

