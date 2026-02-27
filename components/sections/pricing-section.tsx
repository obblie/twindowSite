import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const standard = ["Selective window duplication", "Passive view-only Twindows", "Extended desktop workflow", "Multi-window support"];
const pro = ["FPS controls", "Resolution scaling", "Hotkeys", "Demo mode", "Profiles"];

export function PricingSection() {
  return (
    <section id="pricing" className="section-wrap">
      <SectionHeading
        kicker="Pricing"
        title="Simple tiers for launch"
        description="Early supporters get a lifetime discount. Pricing subject to change."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal className="card-surface p-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Standard</p>
          <p className="mt-4 text-4xl font-bold">$29</p>
          <p className="mt-2 text-sm text-muted">One-time license, core duplication workflow.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {standard.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="#" className="mt-8 w-full">
            Download Standard
          </Button>
        </Reveal>

        <Reveal className="card-surface border-accent/45 p-7" delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Pro (coming soon)</p>
          <p className="mt-4 text-4xl font-bold">TBD</p>
          <p className="mt-2 text-sm text-muted">Advanced controls for power users and studios.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {pro.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button href="#" variant="secondary" className="mt-8 w-full">
            Pro details soon
          </Button>
        </Reveal>
      </div>

      <p className="mt-5 text-xs text-muted">Pricing subject to change. Early supporters get lifetime discount.</p>
    </section>
  );
}
