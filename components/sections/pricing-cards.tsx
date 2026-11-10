"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PricingCatalog, StorefrontProduct } from "@/lib/lemonsqueezy";

const PRICING_API_URL =
  process.env.NEXT_PUBLIC_PRICING_API_URL || "https://twindowsite-servedmg.onrender.com/api/pricing";

const trial = ["Full access for 7 days", "No signup required", "After trial: 1 twindow w/ watermark"];
const individual = [
  "Lifetime license — no subscription",
  "Unlimited twindow use",
  "No watermark",
  "Redaction enabled"
];
const organization = [
  "Bulk license pricing",
  "Everything in Individual",
  "Transferrable licenses",
  "Priority support"
];

function isStorefrontProduct(value: unknown): value is StorefrontProduct {
  if (!value || typeof value !== "object") {
    return false;
  }

  const product = value as Record<string, unknown>;
  return (
    typeof product.formattedPrice === "string" &&
    typeof product.checkoutUrl === "string" &&
    (typeof product.billingLabel === "string" || product.billingLabel === null) &&
    typeof product.available === "boolean"
  );
}

function isPricingCatalog(value: unknown): value is PricingCatalog {
  if (!value || typeof value !== "object") {
    return false;
  }

  const catalog = value as Record<string, unknown>;
  return isStorefrontProduct(catalog.lifetime) && isStorefrontProduct(catalog.subscription);
}

function getCheckoutOverlayUrl(url: string, options: { hideLogo?: boolean } = {}) {
  const { hideLogo = true } = options;
  const checkoutUrl = new URL(url);
  checkoutUrl.searchParams.set("embed", "1");
  if (hideLogo) {
    checkoutUrl.searchParams.set("logo", "0");
  } else {
    checkoutUrl.searchParams.delete("logo");
  }
  return checkoutUrl.toString();
}

type PricingCardsProps = {
  initialCatalog: PricingCatalog;
};

export function PricingCards({ initialCatalog }: PricingCardsProps) {
  const [catalog, setCatalog] = useState(initialCatalog);

  useEffect(() => {
    const controller = new AbortController();

    async function refreshPricing() {
      try {
        const response = await fetch(PRICING_API_URL, {
          headers: { Accept: "application/json" },
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error(`Pricing request failed with ${response.status}`);
        }

        const nextCatalog: unknown = await response.json();
        if (isPricingCatalog(nextCatalog)) {
          setCatalog(nextCatalog);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.warn("Unable to refresh current pricing; keeping the last known catalog.", error);
        }
      }
    }

    void refreshPricing();
    return () => controller.abort();
  }, []);

  const lifetimeIndex = catalog.lifetime.available ? 1 : null;
  const organizationIndex = catalog.lifetime.available ? 2 : 1;
  const gridColumns = catalog.lifetime.available ? "lg:grid-cols-3" : "lg:grid-cols-2";
  const description = "Start free, pay once, or contact us for organization pricing.";

  const cardPadding = "p-5 sm:p-7";
  const metaRowClasses = "flex min-h-6 items-center justify-between gap-3";
  const valueRowClasses = "mt-3 flex min-h-[3.5rem] flex-wrap items-center gap-3 sm:mt-4";
  const blurbClasses = "mt-2 min-h-[2.75rem] text-sm text-muted";
  const individualBlurbClasses = "mt-2 min-h-[2.75rem] text-base text-muted";
  const trialListClasses = "mt-6 flex-1 space-y-2 text-[18px] text-muted";
  const individualListClasses = "mt-6 flex-1 space-y-2 text-[18px] text-muted";
  const organizationListClasses = "mt-6 flex-1 space-y-2 text-[18px] text-muted";
  const trialCtaClasses = "!mt-6 h-14 w-full justify-center text-center !text-[22px] font-semibold";
  const individualCtaClasses = "!mt-6 h-14 w-full justify-center text-center !text-[18px] font-semibold";
  const organizationCtaClasses = "!mt-6 h-14 w-full justify-center text-center !text-[18px] font-semibold";
  const ctaNoteClasses = "mt-2 flex min-h-9 items-end justify-center text-center text-sm font-normal text-muted";

  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading kicker="Pricing" title="Simple pricing. Choose what fits." description={description} />

      <div className={`mt-8 grid gap-4 sm:mt-10 sm:gap-5 ${gridColumns}`}>
        <Reveal className={`card-surface flex h-full flex-col ${cardPadding}`}>
          <div className={metaRowClasses}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Premium Trial</p>
          </div>
          <div className={valueRowClasses}>
            <p className="text-3xl font-bold sm:text-4xl">7 Day Free Trial</p>
          </div>
          <p className={blurbClasses}>Full access for 7 days. No commitment.</p>
          <ul className={trialListClasses}>
            {trial.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="/download" className={trialCtaClasses}>
            Download
          </Button>
          <p className={`${ctaNoteClasses} invisible`} aria-hidden="true">
            Placeholder
          </p>
        </Reveal>

        {catalog.lifetime.available && lifetimeIndex !== null ? (
          <Reveal
            className={`card-surface border-accent/55 flex h-full flex-col ${cardPadding}`}
            delay={lifetimeIndex * 0.04}
          >
            <div className={metaRowClasses}>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Lifetime</p>
              <span className="inline-flex rounded-full border border-yellow-300/70 bg-yellow-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100 shadow-[0_0_24px_rgba(253,224,71,0.35)] [html.light_&]:border-sky-300/70 [html.light_&]:bg-sky-200/60 [html.light_&]:text-sky-800 [html.light_&]:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                Launch Price
              </span>
            </div>
            <div className={valueRowClasses}>
              <p className="text-3xl font-bold sm:text-4xl">{catalog.lifetime.formattedPrice}</p>
            </div>
            <p className={individualBlurbClasses}>Pay once. Lifetime access.</p>
            <ul className={individualListClasses}>
              {individual.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Button
              href={getCheckoutOverlayUrl(catalog.lifetime.checkoutUrl)}
              className={`${individualCtaClasses} lemonsqueezy-button`}
            >
              Buy Now
            </Button>
            <p className={`${ctaNoteClasses} invisible`} aria-hidden="true">
              Placeholder
            </p>
          </Reveal>
        ) : null}

        <Reveal
          className={`card-surface flex h-full flex-col ${cardPadding}`}
          delay={organizationIndex * 0.04}
        >
          <div className={metaRowClasses}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Organization</p>
          </div>
          <div className={valueRowClasses}>
            <p className="text-3xl font-bold sm:text-4xl">Contact</p>
          </div>
          <p className={blurbClasses}>Custom pricing for schools and organizations</p>
          <ul className={organizationListClasses}>
            {organization.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button
            href="mailto:hello@twindow.app?subject=Organization%20Pricing%20Inquiry"
            className={organizationCtaClasses}
          >
            Contact Sales
          </Button>
          <p className={`${ctaNoteClasses} invisible`} aria-hidden="true">
            Placeholder
          </p>
        </Reveal>
      </div>

      <p className="mt-5 text-xl text-muted">*Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
