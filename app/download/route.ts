const DMG_URL = "https://github.com/obblie/twindowSite/releases/download/v0.2.3/twindow.dmg";

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

    const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
    const contentLength = upstream.headers.get("content-length");
    const upstreamDisposition = upstream.headers.get("content-disposition");
    const assetName = (() => {
      try {
        const path = new URL(DMG_URL).pathname;
        return decodeURIComponent(path.split("/").pop() || "download.bin");
      } catch {
        return "download.bin";
      }
    })();

    return new Response(upstream.body, {
      status: 200,
      headers: {
        "content-type": contentType,
        "content-disposition": upstreamDisposition ?? `attachment; filename="${assetName}"`,
        "cache-control": "no-store",
        ...(contentLength ? { "content-length": contentLength } : {})
      }
    });
  } catch {
    return Response.redirect(DMG_URL, 302);
  }
}
