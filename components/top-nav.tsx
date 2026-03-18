"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const observers = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -62% 0px",
        threshold: [0.2, 0.5, 0.8]
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observers.observe(section);
    });

    return () => observers.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-2 md:pt-3">
      <div className="mx-auto w-full max-w-[102rem] px-4 sm:px-5 md:px-8 lg:px-10">
      <div
        className={cn(
          "h-14 w-full rounded-xl px-3 transition-all duration-300 md:h-16 md:px-5",
          isScrolled
            ? "border border-border/70 bg-surface/72 shadow-[0_10px_28px_-22px_hsl(var(--shadow)/0.85)] backdrop-blur-lg md:mx-4 lg:mx-6"
            : "border border-border/45 bg-surface/34 backdrop-blur-md md:mx-0"
        )}
      >
        <div className="grid h-full grid-cols-[auto,1fr] items-center gap-3 md:gap-4 lg:grid-cols-[auto,1fr,auto]">
          <a href="#hero" className="focus-ring inline-flex min-w-0 items-center gap-2 rounded-lg px-2 py-1">
            <span className="font-mono text-[13px] font-semibold lowercase tracking-[0.2em] text-accent md:text-sm">
              twindow
            </span>
          </a>

          <nav
            aria-label="Section navigation"
            className="hidden justify-self-center rounded-lg border border-border/60 bg-card/28 p-1 lg:flex lg:items-center lg:gap-1"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "focus-ring rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition",
                  active === section.id ? "bg-card/90 text-foreground" : "text-muted hover:text-foreground"
                )}
                aria-current={active === section.id ? "page" : undefined}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:justify-self-end">
            <ThemeToggle />
            <Button
              href="/download"
              variant="secondary"
              className="hidden border-border/65 bg-card/45 px-4 py-2 text-[13px] font-medium sm:inline-flex"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}
