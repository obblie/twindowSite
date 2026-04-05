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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">Private Display</p>
            <Reveal
              delay={0.06}
              className="relative overflow-hidden border border-border/80 bg-card/80 shadow-panel"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
              <div className="relative overflow-hidden">
                <LazyVideo
                  className="block h-auto w-full bg-transparent"
                  poster={withBasePath("/twindowAd.png")}
                  ariaLabel="twindow product demo video left panel"
                  sources={[
                    { src: withBasePath("/twindowDemo_a.mov"), type: "video/quicktime" }
                  ]}
                />
              </div>
            </Reveal>
            <p className="mt-3 text-center text-base font-medium text-muted md:text-lg">
              Keep your notes, messages, and real workspace visible only to you.
            </p>
          </div>

          <div>
            <p className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">Extended Desktop</p>
            <Reveal
              delay={0.1}
              className="relative overflow-hidden border border-border/80 bg-card/80 shadow-panel"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
              <div className="relative overflow-hidden">
                <LazyVideo
                  className="block h-auto w-full bg-transparent"
                  poster={withBasePath("/twindowAd.png")}
                  ariaLabel="twindow product demo video right panel"
                  sources={[
                    { src: withBasePath("/twindowDemo_b.mov"), type: "video/quicktime" }
                  ]}
                />
              </div>
            </Reveal>
            <p className="mt-3 text-center text-base font-medium text-muted md:text-lg">
              Share a clean, controlled view—only the windows you choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
