"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/base-path";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-4 md:pt-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[48%] bg-[radial-gradient(80%_120%_at_0%_45%,hsl(var(--accent)/0.18),transparent_65%)] lg:block"
      />
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-[96rem] items-center px-4 pb-16 md:min-h-[calc(100svh-4.5rem)] md:px-8 md:pb-20">
        <div className="grid w-full items-start gap-10 md:gap-12 lg:grid-cols-[1.25fr,0.75fr] lg:gap-12">
          <Reveal className="flex flex-col gap-8 md:gap-9">
            <div className="max-w-[50rem]">
              <h1 className="w-full text-[clamp(3.8rem,7.6vw,7.9rem)] font-extrabold leading-[0.92] tracking-tight">
                <span className="block text-foreground">twindow</span>
                <span className="block text-[0.7em] leading-[1.15] text-accent">
                  <span className="block whitespace-nowrap">never share your</span>
                  <span className="block whitespace-nowrap">desktop again</span>
                </span>
              </h1>
              <p className="hero-description max-w-[44rem] text-base text-muted sm:text-lg md:text-xl md:leading-relaxed">
              Mirror any application window to another display without sharing your desktop. Present only the windows you choose while your working copy stays in front of you and everything else on your desktop stays private.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-3 sm:flex sm:flex-wrap">
                <Button href="/upgrade" className="w-full sm:w-auto sm:min-w-[9.5rem]">
                  Download
                </Button>
                <Button href="#hero-demo" variant="secondary" className="w-full sm:w-auto sm:min-w-[9.5rem]">
                  Watch demo
                </Button>
                <Button
                  href="#features"
                  variant="ghost"
                  className="w-full border border-border/70 bg-card/35 text-foreground hover:bg-card/70 sm:w-auto sm:min-w-[11.5rem]"
                >
                  Explore features
                </Button>
              </div>

              <div className="card-surface inline-flex w-fit max-w-full items-start gap-3 self-start px-5 py-4 text-sm md:px-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Privacy Note</span>
                <p className="text-muted">Screen duplication happens entirely on your device.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:pl-2">
            <div className="card-surface mx-auto flex w-full max-w-[35rem] flex-col space-y-6 rounded-3xl p-5 sm:p-6 md:p-7">
              <div className="relative overflow-hidden rounded-2xl bg-white p-3 sm:p-4">
                <Image
                  src={withBasePath("/twindowBox.jpg")}
                  alt="twindow app box art"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-xl object-cover"
                  priority
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Now shipping</p>
                <p className="mt-2 max-w-[28rem] text-sm leading-relaxed text-muted">
                  Download today and run twindow locally on macOS with no account setup.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Selective app/window duplication</li>
                <li>• View-only passive twindows</li>
                <li>• Works with extended desktop</li>
              </ul>
              <div className="pt-2">
                <Button href="/upgrade" className="w-full">
                  Get twindow
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
