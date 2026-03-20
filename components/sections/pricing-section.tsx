import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trial = [
  "Full access for 7 days",
  "No commitment, no account required",
  "After trial: 1 twindow with watermark"
  
];
const individual = [
  "Lifetime license — no subscription",
  "Unlimited twindow use",
  "No watermark",
  "No account required"
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
  const listClasses = "mt-6 flex-1 space-y-2 text-sm text-muted";
  const ctaClasses = "mt-8 h-14 w-full justify-center text-center text-[1.05rem] font-semibold";

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
          <p className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">7 Day Free Trial</p>
          <p className="mt-2 text-sm text-muted">Full access for 7 days. No commitment.</p>
          <ul className={listClasses}>
            {trial.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="/download" variant="secondary" className={ctaClasses}>
            Start free trial
          </Button>
        </Reveal>

        <Reveal className={`card-surface border-accent/55 flex h-full flex-col ${cardPadding}`} delay={0.08}>
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
          <p className="mt-2 text-sm text-muted">Pay once. Use forever.</p>
          <ul className={listClasses}>
            {individual.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button
            href="https://twindow.lemonsqueezy.com/checkout/buy/d280ea30-1b4c-477e-ba53-9e873bd8fca0"
            className={ctaClasses}
          >
            Lifetime access
          </Button>
        </Reveal>

        <Reveal className={`card-surface flex h-full flex-col ${cardPadding}`} delay={0.12}>
          <div className={metaRowClasses}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Organization</p>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
            <p className="text-3xl font-bold sm:text-4xl">Contact</p>
          </div>
          <p className="mt-2 text-sm text-muted">Custom pricing for schools, and organizations</p>
          <ul className={listClasses}>
            {organization.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button
            href="mailto:hello@twindow.app?subject=Organization%20Pricing%20Inquiry"
            variant="secondary"
            className={ctaClasses}
          >
            Contact Sales
          </Button>
        </Reveal>
      </div>

      <p className="mt-5 text-xl text-muted">*Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
