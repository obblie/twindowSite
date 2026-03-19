import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "I hated mirroring my entire desktop to my students, so I relied on handwritten outlines to keep my notes private. With twindow, I can keep my outline and materials side by side while only sharing what I choose. It’s reassuring knowing I won’t accidentally expose my notes.",
    name: "Elena M.",
    role: "High School Science Teacher"
  },
  {
    quote:
      "During client reviews, I keep a clean, presentation-ready view for the room while maintaining a separate working setup for myself. With twindow, that separation feels intentional—clients see only the polished output, while my tools and process remain private.",
    name: "Marcus T.",
    role: "Project Manager"
  },
  {
    quote:
      "I often present dashboards while keeping my models, and notes, off screen. With twindow, I can build a dashboard on my extended desktop and then share that directly to zoom, or to my audience in person. It's a really simple tool and that's what I like about it.",
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
