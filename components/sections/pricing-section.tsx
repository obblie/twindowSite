import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trial = [
  "Full access for 7 days",
  "No signup required",
  "After trial: 1 twindow w/ watermark"
  
];
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

export function PricingSection() {
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
  const ctaNoteClasses = "mt-2 flex min-h-9 items-end justify-center text-center text-sm font-normal text-white";

  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading
        kicker="Pricing"
        title="Simple pricing. No subscriptions."
        description="Start free, upgrade when you are ready, or contact us for organization pricing."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
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
          <Button href="/download" variant="secondary" className={trialCtaClasses}>
            Download 
          </Button>
          <p className={`${ctaNoteClasses} invisible`} aria-hidden="true">
            Placeholder
          </p>
        </Reveal>

        <Reveal className={`card-surface border-accent/55 flex h-full flex-col ${cardPadding}`} delay={0.08}>
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
          <p className={individualBlurbClasses}>Pay once. Lifetime access.</p>
          <ul className={individualListClasses}>
            {individual.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="https://twindow.lemonsqueezy.com/checkout/buy/d280ea30-1b4c-477e-ba53-9e873bd8fca0?embed=1&logo=0" className={`${individualCtaClasses} lemonsqueezy-button`}>
            Buy Now
          </Button>
          <p className={ctaNoteClasses}>
            <mark className="inline-flex rounded-full border border-white/60 bg-white px-3 py-1 text-sm font-normal tracking-[0.03em] text-slate-900 ring-1 ring-white/80 shadow-[0_0_34px_rgba(255,255,255,0.72)]">
              License Key Delivered via Email
            </mark>
          </p>
        </Reveal>

        <Reveal className={`card-surface flex h-full flex-col ${cardPadding}`} delay={0.12}>
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
            variant="secondary"
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
