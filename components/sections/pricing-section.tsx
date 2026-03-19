import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trial = [
  "Full access for 7 days",
  "No commitment, no account required",
  "After trial: 1 twindow with watermark",
  "All data remains local on your Mac"
];
const individual = [
  "Lifetime license — no subscription",
  "Unlimited twindow use",
  "No watermark",
  "Passive view-only twindows",
  "No account required",
  "All data remains local on your Mac"
];
const organization = [
  "Bulk license pricing",
  "Everything in Individual",
  "Centralized purchasing for teams",
  "Priority email support",
  "Invoice-based billing available",
  "Deployment guidance on request"
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading
        kicker="Pricing"
        title="Simple pricing. No subscriptions."
        description="Start free, upgrade when you are ready, or contact us for organization pricing."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        <Reveal className="card-surface flex h-full flex-col p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Premium Trial</p>
          <p className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">7 Day Free Trial</p>
          <p className="mt-2 text-sm text-muted">Full access for 7 days. No commitment.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {trial.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="/download" variant="secondary" className="mt-auto w-full pt-8">
            Start free trial
          </Button>
        </Reveal>

        <Reveal className="card-surface border-accent/55 flex h-full flex-col p-5 sm:p-7" delay={0.08}>
          <div className="flex items-center justify-between gap-3">
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
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {individual.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">Private by design. No data leaves your Mac.</p>
          <Button
            href="https://twindow.lemonsqueezy.com/checkout/buy/d280ea30-1b4c-477e-ba53-9e873bd8fca0"
            className="mt-auto w-full pt-8"
          >
            Lifetime access
          </Button>
        </Reveal>

        <Reveal className="card-surface flex h-full flex-col p-5 sm:p-7" delay={0.12}>
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Organization</p>
            <span className="inline-flex rounded-full border border-border/70 bg-card/65 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/85">
              Teams
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
            <p className="text-3xl font-bold sm:text-4xl">Contact</p>
          </div>
          <p className="mt-2 text-sm text-muted">Custom pricing for schools, departments, and organizations buying in volume.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {organization.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button
            href="mailto:hello@twindow.app?subject=Organization%20Pricing%20Inquiry"
            variant="secondary"
            className="mt-auto w-full pt-8"
          >
            Contact sales
          </Button>
        </Reveal>
      </div>

      <p className="mt-5 text-xl text-muted">*Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
