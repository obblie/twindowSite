"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-5 md:pt-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[70%] bg-[radial-gradient(80%_120%_at_0%_45%,hsl(var(--accent)/0.2),transparent_65%)] lg:block"
      />
      <div className="mx-auto flex w-full max-w-[102rem] items-center px-4 pb-14 sm:px-5 md:min-h-[calc(100svh-4.5rem)] md:px-8 md:pb-20 lg:px-10">
        <div className="grid w-full justify-items-center gap-8 sm:gap-10 md:gap-12">
          <Reveal className="flex w-full max-w-[56rem] flex-col items-center gap-7 text-center sm:gap-8 md:gap-10">
            <div className="max-w-[56rem]">
              <h1 className="w-full text-center font-extrabold leading-[0.92] tracking-tight">
                <span className="block text-[clamp(3.2rem,17vw,5.4rem)] text-foreground md:text-[clamp(5rem,15.5vw,12rem)]">
                  twindow
                </span>
                <span className="block text-[clamp(2rem,12vw,3.3rem)] leading-[1.06] text-accent md:text-[clamp(3.4rem,5.5vw,7.4rem)]">
                  <span className="block sm:hidden">never share</span>
                  <span className="block sm:hidden">your desktop</span>
                  <span className="block sm:hidden">again</span>
                  <span className="hidden sm:block whitespace-nowrap">Mirror apps,</span>
                  <span className="hidden sm:block whitespace-nowrap">not your desktop.</span>
                </span>
              </h1>
              <p className="hero-description max-w-[52rem] text-base leading-relaxed text-muted sm:text-lg md:text-2xl md:leading-relaxed">
                Mirror any application window to another display without sharing your desktop. Present only the windows
                you choose while your working copy stays in front of you and everything else on your desktop stays
                private.
              </p>
            </div>

            <div className="mt-12 w-full max-w-[50rem] space-y-3 sm:mt-14">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <Button href="/download" className="h-[3.75rem] w-full !text-[18px] font-semibold shadow-soft md:h-16">
                  Download
                </Button>
                <Button href="#hero-demo" variant="secondary" className="h-[3.75rem] w-full !text-[18px] font-semibold md:h-16">
                  Watch demo
                </Button>
                <Button
                  href="#testimonials"
                  variant="ghost"
                  className="h-[3.75rem] w-full border border-border/80 bg-card/35 !text-[18px] font-semibold text-foreground hover:bg-card/65 md:h-16"
                >
                  Testimonials
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
