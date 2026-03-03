"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/base-path";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-4 md:pt-6">
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-[96rem] items-center px-4 pb-16 md:min-h-[calc(100svh-4.5rem)] md:px-8 md:pb-20">
        <div className="grid w-full items-center gap-12 md:gap-16 lg:items-stretch lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="flex h-full flex-col justify-between gap-9 md:gap-10">
            <div className="max-w-[42rem] space-y-6 md:space-y-7">
              <h1 className="w-full text-[3.7rem] font-extrabold leading-[0.92] tracking-tight sm:text-[4.7rem] md:text-[6.9rem]">
                <span className="block text-[1.18em] text-foreground md:text-[1.24em]">twindow</span>
                <span className="block text-[0.95em] font-bold leading-[1.02] text-accent">
                  mirror apps, not your life.
                </span>
              </h1>
              <p className="text-base text-muted sm:text-lg md:text-xl">
                twindows are read only duplicates of application windows. Move twindows to 
                a 2nd display to avoid exposing your desktop, keeping your interactive applications in front of you, and your personal workspace private.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:flex sm:flex-wrap sm:gap-3">
                <Button href="#pricing" className="w-full sm:w-auto">
                  Download
                </Button>
                <Button href="#hero-demo" variant="secondary" className="w-full sm:w-auto">
                  Watch demo
                </Button>
                <Button
                  href="#features"
                  variant="ghost"
                  className="w-full border border-border/70 bg-card/40 text-foreground hover:bg-card/70 sm:w-auto"
                >
                  Explore features
                </Button>
              </div>

              <div className="card-surface inline-flex w-fit max-w-full items-start gap-3 self-start p-4 text-sm md:p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Privacy Note</span>
                <p className="text-muted">No account required. Local duplication. Privacy first, always.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="card-surface mx-auto flex h-full w-full max-w-[540px] flex-col justify-between space-y-6 p-5 sm:p-6 md:p-7">
              <div className="relative overflow-hidden rounded-2xl bg-surface/70">
                <Image
                  src={withBasePath("/twindowBox.png")}
                  alt="twindow app box art"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Now shipping</p>
                <p className="mt-2 text-sm text-muted">Download today and run twindow locally on macOS with no account setup.</p>
              </div>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Selective app/window duplication</li>
                <li>• View-only passive twindows</li>
                <li>• Works with extended desktop</li>
              </ul>
              <div className="pt-2">
                <Button href="#pricing" className="w-full">
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
