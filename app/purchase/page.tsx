import type { Metadata } from "next";
import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";

const checkoutUrl =
  "https://twindow.lemonsqueezy.com/checkout/buy/d280ea30-1b4c-477e-ba53-9e873bd8fca0?embed=1&logo=0";

const individual = [
  "Lifetime license — no subscription",
  "Unlimited twindow use",
  "No watermark",
  "Redaction enabled"
];

export const metadata: Metadata = {
  title: "Purchase | twindow",
  description: "Purchase a twindow lifetime license."
};

export default function PurchasePage() {
  const cardPadding = "p-5 sm:p-7";
  const metaRowClasses = "flex min-h-6 items-center justify-between gap-3";
  const listClasses = "mt-6 flex-1 space-y-2 text-sm text-muted";
  const ctaClasses = "mt-8 h-14 w-full justify-center text-center text-[1.05rem] font-semibold";

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
            href="/#pricing"
            className="focus-ring rounded-lg border border-border bg-card/75 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-card"
          >
            Back to pricing
          </Link>
        </div>
      </header>

      <main className="section-wrap">
        <section className="mx-auto flex w-full max-w-[21.6rem] flex-col gap-5">
          <div className={`card-surface border-accent/55 flex h-full flex-col ${cardPadding}`}>
            <div className={metaRowClasses}>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Individual</p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
              <p className="text-xl font-semibold text-muted line-through sm:text-2xl">$14.99</p>
              <p className="text-3xl font-bold sm:text-4xl">$9.99</p>
              <span className="inline-flex rounded-full border border-yellow-300/70 bg-yellow-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100 shadow-[0_0_24px_rgba(253,224,71,0.35)] [html.light_&]:border-sky-300/70 [html.light_&]:bg-sky-200/60 [html.light_&]:text-sky-800 [html.light_&]:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                Earlybird
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">Pay once. Lifetime access.</p>
            <ul className={listClasses}>
              {individual.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Button href={checkoutUrl} className={`${ctaClasses} lemonsqueezy-button`}>
              Buy Now
            </Button>
            <p className="mt-2 h-0 text-center text-xs text-muted">After purchase, your license key will be emailed.</p>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
