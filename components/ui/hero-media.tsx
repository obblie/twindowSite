import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { withBasePath } from "@/lib/base-path";

export function HeroMedia() {
  return (
    <section id="hero-demo" className="section-wrap pt-0 md:pt-2">
      <SectionHeading
        kicker="Demo"
        title="See Twindow on a real second-screen workflow"
        description="A short product loop showing passive duplicate windows in motion, without sending viewers out to another platform."
      />

      <Reveal
        delay={0.06}
        className="relative mt-8 overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-2 shadow-panel sm:mt-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] border border-border/70 bg-surface">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={withBasePath("/twindowAd.png")}
            aria-label="Twindow product demo video"
          >
            <source src={withBasePath("/TwindowDemo.mp4")} type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <p className="inline-flex rounded-full border border-border/70 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent backdrop-blur">
              Passive duplicate window
            </p>
            <p className="hidden rounded-full border border-border/70 bg-surface/80 px-3 py-1 text-xs text-muted backdrop-blur sm:inline-flex">
              Native HTML video
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
