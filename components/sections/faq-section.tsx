import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "What are the system requirements?",
    a: "twindow requires macOS 13.0 (Ventura) or newer and supports Apple Silicon Macs only (arm64: M1, M2, M3, or M4)."
  },
  {
    q: "Is it screen mirroring?",
    a: "Not full-screen mirroring. twindow is selective duplication of specific application windows."
  },
  {
    q: "Does it record my screen?",
    a: "No. twindow does not record your screen. macOS requires apps to request Screen Recording permission in order to access the contents of a window. twindow uses this permission only to live-mirror the selected window to a twindow on another display. Nothing is recorded, stored, or saved to a video file."
  },
  {
    q: "Does it capture keystrokes?",
    a: "No. twindows are read-only and do not pass input through."
  },
  {
    q: "Will it work with Zoom or OBS?",
    a: "twindow helps you prepare what to share on a second monitor, but it is not a Zoom or OBS plugin. We recommend using twindow in conjunction with these tools to create a seamless presentation experience."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-wrap">
      <SectionHeading kicker="FAQ" title="Frequently asked questions" />
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
