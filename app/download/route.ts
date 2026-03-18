const DMG_URL = "https://github.com/obblie/twindowSite/releases/download/v0.2.43/twindow.dmg";
const DOWNLOAD_FILENAME = "twindow.dmg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const upstream = await fetch(DMG_URL, {
      cache: "no-store",
      redirect: "follow",
      headers: {
        "user-agent": "twindow-download-proxy/1.0"
      }
    });

    if (!upstream.ok || !upstream.body) {
      return Response.redirect(DMG_URL, 302);
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
    return Response.redirect(DMG_URL, 302);
  }
}
