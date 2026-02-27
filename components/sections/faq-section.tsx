import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "Is it screen mirroring?",
    a: "Not full-screen mirroring. Twindow is selective duplication of specific app windows."
  },
  {
    q: "Does it record my screen?",
    a: "No. Twindow does not record your screen."
  },
  {
    q: "Does it capture keystrokes?",
    a: "No. Twindows are view-only and do not pass input through."
  },
  {
    q: "Will it work with Zoom?",
    a: "Twindow helps you prepare what to share on a second monitor, but it is not a Zoom plugin."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-wrap">
      <SectionHeading kicker="FAQ" title="Common questions" />
      <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
        {faqs.map((faq, index) => (
          <Reveal key={faq.q} delay={index * 0.03} className="card-surface p-5 sm:p-6">
            <h3 className="text-base font-semibold sm:text-lg">{faq.q}</h3>
            <p className="mt-2 text-sm text-muted">{faq.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
