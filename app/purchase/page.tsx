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
  const valueRowClasses = "mt-3 flex min-h-[3.5rem] flex-wrap items-center gap-3 sm:mt-4";
  const blurbClasses = "mt-2 min-h-[2.75rem] text-sm text-muted";
  const listClasses = "mt-6 flex-1 space-y-2 text-[18px] text-muted";
  const ctaClasses = "!mt-6 h-14 w-full justify-center text-center text-[1.05rem] font-semibold";
  const ctaNoteClasses = "mt-2 flex min-h-9 items-end justify-center text-center text-[22px] font-normal text-white";

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
            <div className={valueRowClasses}>
              <p className="text-xl font-semibold text-muted line-through sm:text-2xl">$14.99</p>
              <p className="text-3xl font-bold sm:text-4xl">$9.99</p>
              <span className="inline-flex rounded-full border border-yellow-300/70 bg-yellow-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100 shadow-[0_0_24px_rgba(253,224,71,0.35)] [html.light_&]:border-sky-300/70 [html.light_&]:bg-sky-200/60 [html.light_&]:text-sky-800 [html.light_&]:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                Earlybird
              </span>
            </div>
            <p className={blurbClasses}>Pay once. Lifetime access.</p>
            <ul className={listClasses}>
              {individual.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Button href={checkoutUrl} className={`${ctaClasses} lemonsqueezy-button`}>
              Buy Now
            </Button>
            <p className={ctaNoteClasses}>
              <mark className="inline-flex rounded-full border border-white/60 bg-white px-3 py-1 text-sm font-normal tracking-[0.03em] text-slate-900 ring-1 ring-white/80 shadow-[0_0_34px_rgba(255,255,255,0.72)]">
                License Key Delivered via Email
              </mark>
            </p>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
