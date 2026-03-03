import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const personas = [
  {
    role: "Presenter",
    quote: "I mirror slides to the stage display and keep timing notes private on my laptop.",
    scenario: "Conference talk with one polished output and zero accidental desktop reveals."
  },
  {
    role: "Streamer",
    quote: "My audience sees the editor. My private messages stay off-screen.",
    scenario: "Live coding with confidence and no emergency window juggling."
  },
  {
    role: "Creative technologist",
    quote: "I pin multiple twindows for plugins and control panels on a dedicated monitor.",
    scenario: "Multi-app workflow where one display stays clean for clients or collaborators."
  }
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-wrap">
      <SectionHeading
        kicker="Testimonials / Use cases"
        title="Built for people who present, stream, and build in public"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {personas.map((persona, index) => (
          <Reveal key={persona.role} delay={index * 0.06} className="card-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{persona.role}</p>
            <p className="mt-4 text-lg font-medium">“{persona.quote}”</p>
            <p className="mt-4 text-sm text-muted">{persona.scenario}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
