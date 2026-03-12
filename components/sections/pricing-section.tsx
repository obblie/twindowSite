import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const trial = [
  "Full premium features for 14 days",
  "Multiple twindows",
  "After trial, 1 twindow with watermark",
  "No account required",
  "All data remains local on your Mac"
];
const standard = [
  "One-time purchase after trial",
  "Multiple twindows",
  "Passive view-only twindows",
  "No account required",
  "All data remains local on your Mac"
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading
        kicker="Pricing"
        title="One app, two ways to start"
        description="Start with a two-week premium trial, then keep the full app with a one-time purchase."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
        <Reveal className="card-surface p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Premium Trial</p>
          <p className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">14 Day Free Trial</p>
          <p className="mt-2 text-sm text-muted">Use the full twindow workflow free for two weeks before deciding.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {trial.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="/upgrade" variant="secondary" className="mt-8 w-full">
            Start trial
          </Button>
        </Reveal>

        <Reveal className="card-surface border-accent/45 p-5 sm:p-7" delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Keep twindow</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-4">
            <p className="text-xl font-semibold text-muted line-through sm:text-2xl">$14.99</p>
            <p className="text-3xl font-bold sm:text-4xl">$9.99</p>
            <span className="inline-flex rounded-full border border-yellow-300/70 bg-yellow-300/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-100 shadow-[0_0_24px_rgba(253,224,71,0.35)]">
              Earlybird
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">One-time license for the full twindow workflow after your trial ends.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {standard.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="/upgrade" className="mt-8 w-full">
            Buy now
          </Button>
        </Reveal>
      </div>

      <p className="mt-5 text-xs text-muted">Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
