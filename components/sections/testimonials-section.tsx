import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const useCases = [
  {
    title: "Teaching and Training",
    description:
      "Keep lesson plan materials, class notes, and teaching controls on your desktop while students only see the teaching content in twindow.",
    guidanceLabel: "Classroom setup",
    guidance:
      "Present the lesson window to the room and keep rubrics, notes, and pacing tools visible only to you."
  },
  {
    title: "Client Reviews",
    description:
      "Walk through deliverables on an external display without exposing drafts, internal docs, or chat threads.",
    guidanceLabel: "Review flow",
    guidance: "Mirror only approved review windows so client sessions stay focused and low-risk."
  },
  {
    title: "Live Demos and Ops",
    description:
      "Share dashboards or product screens in real time while keeping controls, credentials, and side tools private.",
    guidanceLabel: "Ops workflow",
    guidance: "Use a read-only twindow for the audience while you manage controls and credentials locally."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-wrap pt-4 md:pt-8">
      <SectionHeading
        kicker="Use Cases"
        title="Ways teams use twindow in real workflows"
        description="Practical scenarios where selective window sharing keeps presentations clear and private."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <Reveal key={useCase.title} delay={index * 0.04} className="card-surface h-full p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{useCase.title}</p>
            <p className="mt-3 text-sm leading-7 text-foreground/90">{useCase.description}</p>
            <div className="mt-6 border-t border-border/60 pt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">{useCase.guidanceLabel}</p>
              <p className="mt-2 text-sm text-foreground/85">{useCase.guidance}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
