const DMG_URL = "https://github.com/obblie/twindowSite/releases/download/v0.2.43/twindow.dmg";
const DOWNLOAD_FILENAME = "twindow.dmg";

export async function GET() {
  try {
    const upstream = await fetch(DMG_URL, {
      cache: "no-store",
      redirect: "follow"
    });

    if (!upstream.ok || !upstream.body) {
      return new Response("Download temporarily unavailable.", { status: 502 });
    }

    const contentType = upstream.headers.get("content-type") ?? "application/x-apple-diskimage";
    const contentLength = upstream.headers.get("content-length");

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "content-type": contentType,
        "content-disposition": `attachment; filename="${DOWNLOAD_FILENAME}"`,
        "cache-control": "no-store",
        ...(contentLength ? { "content-length": contentLength } : {})
      }
    });
  } catch {
    return new Response("Download temporarily unavailable.", { status: 502 });
  }
}
