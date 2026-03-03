import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "I teach with slides on one screen and my notes on the other. twindow lets students see only what I intend to present without exposing the rest of my desktop.",
    name: "Elena M.",
    role: "College Lecturer"
  },
  {
    quote:
      "During client reviews I need one clean view for the room and a separate working setup for myself. twindow made that split feel deliberate instead of improvised.",
    name: "Marcus T.",
    role: "Project Manager"
  },
  {
    quote:
      "I often present dashboards while keeping private models and messages off-screen. twindow gives me a much cleaner handoff to the external monitor.",
    name: "Priya S.",
    role: "Financial Analyst"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-wrap pt-4 md:pt-8">
      <SectionHeading
        kicker="Testimonials"
        title="Built for people who present live"
        description="A few of the workflows where a clean second-screen view matters most."
      />

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.04} className="card-surface h-full p-6">
            <p className="text-sm leading-7 text-foreground/90">{testimonial.quote}</p>
            <div className="mt-6 border-t border-border/60 pt-4">
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{testimonial.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
