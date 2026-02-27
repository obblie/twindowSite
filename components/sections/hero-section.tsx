"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroMedia } from "@/components/ui/hero-media";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/base-path";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 md:pt-12">
      <div className="section-wrap pb-10 md:pb-12">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="space-y-7">
            <p className="kicker">macOS utility</p>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
                Twindow
                <span className="block text-accent">Mirror apps, not your life.</span>
              </h1>
              <p className="max-w-2xl text-base text-muted sm:text-lg md:text-xl">
                Twindows are non-interactive (read only) duplicates of any app window. Move your Twindows to 
                a second display to avoid exposing your desktop, keeping your personal workspace private.
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button href="#pricing" className="w-full sm:w-auto">
                Download
              </Button>
              <Button href="#hero-demo" variant="secondary" className="w-full sm:w-auto">
                Watch demo
              </Button>
              <Button href="#features" variant="ghost" className="w-full sm:w-auto">
                Explore features
              </Button>
            </div>

            <div className="card-surface flex items-start gap-3 p-4 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Privacy Note</span>
              <p className="text-muted">No screen recording. No account. Local-only duplication.</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card-surface mx-auto w-full max-w-[510px] space-y-5 p-5 sm:p-6">
              <div className="relative overflow-hidden rounded-2xl bg-surface/70">
                <Image
                  src={withBasePath("/twindowBox.png")}
                  alt="Twindow app box art"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Now shipping</p>
                <p className="mt-2 text-sm text-muted">Download today and run Twindow locally on macOS with no account setup.</p>
              </div>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Selective app/window duplication</li>
                <li>• View-only passive Twindows</li>
                <li>• Works with extended desktop</li>
              </ul>
              <Button href="#pricing" className="w-full">
                Get Twindow
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 pb-8 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-[110rem]">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}
