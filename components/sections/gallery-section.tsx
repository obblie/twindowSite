import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartImage } from "@/components/ui/smart-image";

const galleryItems = [
  {
    title: "A) App picker",
    src: "/gallery-1.png",
    shouldShow: "A clean list of open app windows with one selected to become a Twindow.",
    why: "Shows selective targeting instead of full-screen mirroring."
  },
  {
    title: "B) Passive Twindow",
    src: "/gallery-2.png",
    shouldShow: "A separate duplicate window with a subtle border and no interaction cursor cues.",
    why: "Communicates view-only behavior for safer sharing."
  },
  {
    title: "C) Drag to monitor",
    src: "/gallery-3.png",
    shouldShow: "User dragging a Twindow onto a second display in extended desktop mode.",
    why: "Demonstrates the core two-screen workflow clearly."
  },
  {
    title: "D) Presenter workflow",
    src: "/gallery-4.png",
    shouldShow: "Slides visible on the second display while speaker notes stay private on the main desktop.",
    why: "Highlights privacy in real presentation scenarios."
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-wrap">
      <SectionHeading
        kicker="Show it in action"
        title="Documentation gallery placeholders"
        description="Replace each placeholder with real screenshots or GIFs as your product visuals are captured."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {galleryItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04} className="card-surface overflow-hidden">
            <div className="relative aspect-[16/10] border-b border-border/70">
              <SmartImage src={item.src} alt={item.title} fill className="object-cover" fallbackLabel={item.shouldShow} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent p-5">
                <p className="mt-auto max-w-lg text-sm text-foreground/85">{item.shouldShow}</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">What the image should show:</span> {item.shouldShow}
              </p>
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">Why it matters:</span> {item.why}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
