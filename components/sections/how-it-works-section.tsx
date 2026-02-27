import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Pick a window",
    description: "Choose the exact app window you want to duplicate from a clean picker."
  },
  {
    title: "Create a Twindow",
    description: "Generate a passive, view-only duplicate with one click."
  },
  {
    title: "Drag to second display",
    description: "Move the Twindow to your extended desktop and keep your main desktop private."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-wrap">
      <SectionHeading
        kicker="How it works"
        title="Three steps to a private second-screen workflow"
        description="Built for presenters, streamers, and makers who need focus and control."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06} className="relative card-surface p-6 md:min-h-48">
            <div className="absolute left-6 top-0 hidden h-px w-[calc(100%-3rem)] bg-border md:block" />
            <p className="font-mono text-xs text-accent">0{index + 1}</p>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm text-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
