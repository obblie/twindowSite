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
          descriptionClassName="!text-[21px] md:!text-[21px]"
        />

        <Reveal
          delay={0.06}
          className="relative mt-8 overflow-hidden border border-border/80 bg-card/80 shadow-panel sm:mt-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <LazyVideo
                className="block h-auto w-full bg-transparent"
                poster={withBasePath("/twindowAd.png")}
                ariaLabel="twindow product demo video left panel"
                sources={[
                  { src: withBasePath("/twindowDemo_a.mov"), type: "video/mp4" }
                ]}
              />
              <LazyVideo
                className="block h-auto w-full bg-transparent"
                poster={withBasePath("/twindowAd.png")}
                ariaLabel="twindow product demo video right panel"
                sources={[
                  { src: withBasePath("/twindowDemo_b.mov"), type: "video/mp4" }
                ]}
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            </div>
          </div>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <p className="text-center text-3xl font-bold tracking-tight md:text-4xl">Private Display</p>
          <p className="text-center text-3xl font-bold tracking-tight md:text-4xl">Extended Desktop</p>
        </div>
      </div>
    </section>
  );
}
