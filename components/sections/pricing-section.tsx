import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const free = ["Create one Twindow", "Passive view-only window", "Extended desktop workflow", "No account required"];
const standard = ["Selective window duplication", "Multiple Twindows", "Passive view-only Twindows", "Extended desktop workflow"];

export function PricingSection() {
  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading
        kicker="Pricing"
        title="One app, two ways to start"
        description="Try for free, limited to one Twindow, or unlock the full app for multi-twindow workflows."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
        <Reveal className="card-surface p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">free</p>
          <p className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">$0</p>
          <p className="mt-2 text-sm text-muted">A free way to try Twindow with a single mirrored window.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {free.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="#" variant="secondary" className="mt-8 w-full">
            Download free
          </Button>
        </Reveal>

        <Reveal className="card-surface border-accent/45 p-5 sm:p-7" delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Twindow</p>
          <p className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">$29</p>
          <p className="mt-2 text-sm text-muted">One-time license for the full multi-window Twindow workflow.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {standard.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="#" className="mt-8 w-full">
            Download Twindow
          </Button>
        </Reveal>
      </div>

      <p className="mt-5 text-xs text-muted">Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
