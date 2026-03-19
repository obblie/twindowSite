const DEFAULT_LEMON_BASE_URL = "https://api.lemonsqueezy.com/v1";

function normalizeBaseUrl(input?: string) {
  const base = (input || DEFAULT_LEMON_BASE_URL).trim().replace(/\/+$/, "");
  return /\/v\d+$/.test(base) ? base : `${base}/v1`;
}

export function getLemonConfig() {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
  if (!apiKey) {
    throw new Error("Missing LEMON_SQUEEZY_API_KEY");
  }

  const baseUrl = normalizeBaseUrl(process.env.LEMON_API_BASE_URL);
  return { apiKey, baseUrl };
}

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

