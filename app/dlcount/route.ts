import { NextResponse } from "next/server";

const RENDER_API_BASE = "https://api.render.com/v1";
const HIT_MARKER = "DOWNLOAD_HIT";
const MAX_PAGES = 20;

type RenderService = {
  ownerId?: string;
};

type RenderLogsResponse = {
  hasMore?: boolean;
  nextStartTime?: string;
  nextEndTime?: string;
} & Record<string, unknown>;

function collectMessages(value: unknown, out: string[]) {
  if (!value) return;
  if (Array.isArray(value)) {
    for (const item of value) collectMessages(item, out);
    return;
  }
  if (typeof value !== "object") return;

  const obj = value as Record<string, unknown>;
  const message = obj.message;
  if (typeof message === "string") out.push(message);

  for (const nested of Object.values(obj)) {
    if (nested && typeof nested === "object") collectMessages(nested, out);
  }
}

function findDownloadHits(payload: unknown) {
  const messages: string[] = [];
  collectMessages(payload, messages);
  return messages.filter((msg) => msg.includes(HIT_MARKER)).length;
}

async function fetchJson<T>(url: string, token: string): Promise<T> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Render API ${res.status}: ${text || "request failed"}`);
  }

  return (await res.json()) as T;
}

export async function GET(request: Request) {
  const adminKey = process.env.DLCOUNT_KEY;
  const providedKey = new URL(request.url).searchParams.get("key");
  if (!adminKey || providedKey !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const renderApiKey = process.env.RENDER_API_KEY;
  const serviceId = process.env.RENDER_SERVICE_ID;
  if (!renderApiKey || !serviceId) {
    return NextResponse.json(
      {
        error: "Missing env vars. Set RENDER_API_KEY and RENDER_SERVICE_ID."
      },
      { status: 500 }
    );
  }

  try {
    const service = await fetchJson<RenderService>(`${RENDER_API_BASE}/services/${serviceId}`, renderApiKey);
    const ownerId = service.ownerId;

    if (!ownerId) {
      return NextResponse.json({ error: "Could not resolve ownerId from Render service." }, { status: 500 });
    }

    const now = new Date();
    const from = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30); // Render API max window: 30 days
    let startTime = from.toISOString();
    let endTime = now.toISOString();

    let totalHits = 0;
    let pagesRead = 0;

    while (pagesRead < MAX_PAGES) {
      const params = new URLSearchParams({
        ownerId,
        startTime,
        endTime,
        direction: "backward",
        limit: "1000"
      });
      params.append("resource", serviceId);
      params.append("type", "app");
      params.append("text", HIT_MARKER);

      const logs = await fetchJson<RenderLogsResponse>(`${RENDER_API_BASE}/logs?${params.toString()}`, renderApiKey);
      totalHits += findDownloadHits(logs);
      pagesRead += 1;

      if (!logs.hasMore || !logs.nextStartTime || !logs.nextEndTime) break;
      startTime = logs.nextStartTime;
      endTime = logs.nextEndTime;
    }

    return NextResponse.json({
      hitMarker: HIT_MARKER,
      totalHits,
      windowStart: from.toISOString(),
      windowEnd: now.toISOString(),
      pagesRead
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
