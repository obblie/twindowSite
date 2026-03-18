import { LazyVideo } from "@/components/ui/lazy-video";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { withBasePath } from "@/lib/base-path";

export function HeroMedia() {
  return (
    <section id="hero-demo" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto w-full max-w-[96rem]">
        <SectionHeading
          kicker="Demo"
          title="Never share your desktop again"
          description="Create a twindow in seconds, and drag it to a second display. "
          className="px-1 md:px-2"
        />

        <Reveal
          delay={0.06}
          className="relative mt-8 overflow-hidden border border-border/80 bg-card/80 shadow-panel sm:mt-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
          <div className="relative overflow-hidden">
            <LazyVideo
              className="block h-auto w-full bg-transparent"
              poster={withBasePath("/twindowAd.png")}
              ariaLabel="twindow product demo video"
              sources={[
                { src: withBasePath("/TwindowDemo.mp4?v=20260301-2"), type: "video/mp4" }
              ]}
            />

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
      </div>
    </section>
  );
}
