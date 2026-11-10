import { getLemonConfig } from "@/lib/lemonsqueezy";

export async function proxyLemonLicenseRequest(request: Request, endpoint: "activate" | "validate" | "deactivate") {
  const { apiKey, baseUrl } = getLemonConfig();
  const body = await request.text();

  const upstream = await fetch(`${baseUrl}/licenses/${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": request.headers.get("content-type") || "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body
  });

  const responseText = await upstream.text();
  return new Response(responseText, {
    status: upstream.status,
    headers: {
      "content-type": upstream.headers.get("content-type") || "application/json",
      "cache-control": "no-store"
    }
  });
}

