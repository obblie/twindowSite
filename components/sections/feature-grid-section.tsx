import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    label: "Privacy First",
    copy: "Never share your desktop again!"
  },
  {
    label: "Passive Duplicate Windows",
    copy: "Twindows are read-only with no input passthrough."
  },
  {
    label: "Extended desktop native",
    copy: "Choose specific application windows to share, and use in your extended desktop workflow."
  },
  {
    label: "Multi-window support",
    copy: "Create multiple Twindows to arrange your dashboard layout"
  }
];

function DotIcon() {
  return <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_16px_hsl(var(--accent)/0.7)]" aria-hidden="true" />;
}

export function FeatureGridSection() {
  return (
    <section id="features" className="section-wrap">
      <SectionHeading
        kicker="Features"
        title="Control exactly what appears on screen"
        description="Core controls now, pro workflow upgrades on the roadmap."
      />

      <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.label} delay={index * 0.03} className="card-surface p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <DotIcon />
              {/* <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">[- - - - - -]</p> */}
            </div>
            <h3 className="mt-3 text-base font-semibold sm:mt-4">{feature.label}</h3>
            <p className="mt-2 text-sm text-muted">{feature.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
