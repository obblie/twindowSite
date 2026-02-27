import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const assets = ["App icon pack (placeholder)", "Logo lockups (placeholder)", "Product screenshots (placeholder)", "One-page brand sheet (placeholder)"];

export function PressKitSection() {
  return (
    <section id="press-kit" className="section-wrap">
      <SectionHeading
        kicker="Press kit"
        title="Media assets for launch coverage"
        description="Press kit placeholders ready to be replaced with production assets."
      />

      <Reveal className="card-surface mt-8 p-7">
        <ul className="grid gap-3 text-sm text-muted sm:grid-cols-2">
          {assets.map((asset) => (
            <li key={asset} className="rounded-xl border border-border/70 bg-surface/65 p-4">
              {asset}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#" variant="secondary">
            Download press kit
          </Button>
          <Button href="mailto:press@twindow.app" variant="ghost">
            press@twindow.app
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
