import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";

const checkoutUrl = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL ?? "";
const checkoutOverlayUrl = checkoutUrl
  ? `${checkoutUrl}${checkoutUrl.includes("?") ? "&" : "?"}embed=1&logo=0`
  : "";

export const metadata: Metadata = {
  title: "Upgrade | twindow",
  description: "Buy a twindow license and activate it in the app with your emailed license key."
};

export default function UpgradePage() {
  return (
    <>
      <header className="border-b border-border/70 bg-surface/80 backdrop-blur-xl">
        <div className="container-shell flex min-h-16 items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-lg px-2 py-1 font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            twindow
          </Link>
          <Link
            href="/#faq"
            className="focus-ring rounded-lg border border-border bg-card/75 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-card"
          >
            Questions
          </Link>
        </div>
      </header>

      <main className="section-wrap">
        <article className="card-surface mx-auto max-w-3xl space-y-8 p-6 md:p-10">
          <header className="space-y-3">
            <p className="kicker">Upgrade</p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Unlock twindow premium</h1>
            <p className="max-w-2xl text-sm leading-7 text-muted md:text-base">
              One-time purchase. Checkout opens in a secure Lemon Squeezy overlay.
            </p>
          </header>

          <section className="space-y-4">
            <ul className="space-y-2 text-sm text-foreground/92 md:text-base">
              <li>• Keep full twindow workflow after your trial</li>
              <li>• Use your license key directly in the macOS app</li>
              <li>• Existing customers: return to the app and paste your key to activate</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border/70 bg-card/35 p-5 md:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">After purchase</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-foreground/92 md:text-base">
              <li>Your license key is emailed automatically by Lemon Squeezy.</li>
              <li>Open twindow on your Mac and paste the key into the activation field.</li>
              <li>If you do not see the email, check spam or promotions folders.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <Button href={checkoutOverlayUrl || "#"} className="w-full sm:w-auto lemonsqueezy-button">
              Buy Now
            </Button>
            {!checkoutUrl ? (
              <p className="text-sm text-muted">
                Checkout link is not configured yet. Set <code>NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL</code>.
              </p>
            ) : null}
          </section>
        </article>
      </main>

      <FooterSection />
    </>
  );
}
