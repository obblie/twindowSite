"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === active)
  );
  const indicatorIndex = hoveredIndex ?? activeIndex;

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

  return (
    <header className="sticky top-0 z-50 border-b border-border/45 bg-surface/36 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[102rem] px-4 sm:px-5 md:px-8 lg:px-10">
        <div className="grid h-14 grid-cols-[auto,1fr] items-center gap-3 md:h-16 md:gap-4 lg:grid-cols-[auto,1fr,auto]">
          <a href="#hero" className="focus-ring inline-flex min-w-0 items-center gap-2 rounded-lg px-2 py-1">
            <span className="font-mono text-[14px] font-semibold lowercase tracking-[0.22em] text-accent md:text-[15px]">
              twindow
            </span>
          </a>

          <nav
            aria-label="Section navigation"
            className="relative hidden justify-self-center lg:grid lg:w-[21.75rem] lg:grid-cols-3 lg:-translate-x-3"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-md bg-accent shadow-[0_0_0_1px_hsl(var(--accent)/0.45),0_8px_24px_-16px_hsl(var(--accent)/0.8)] transition-transform duration-300"
              style={{ transform: `translateX(${indicatorIndex * 100}%)` }}
            />
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => {
                  setActive(section.id);
                  setHoveredIndex(null);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "focus-ring relative z-10 rounded-md px-3 py-1.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] transition",
                  index === indicatorIndex
                    ? "text-accent-foreground"
                    : active === section.id
                      ? "text-foreground"
                      : "text-muted/90 hover:text-foreground"
                )}
                aria-current={active === section.id ? "page" : undefined}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:justify-self-end">
            <ThemeToggle className="h-9 rounded-md border-border/55 bg-card/25 px-3.5 py-1.5 text-[12px] font-medium tracking-[0.12em] text-foreground/90 hover:bg-card/45" />
            <Button
              href="/download"
              variant="secondary"
              className="hidden h-9 rounded-md border-border/55 bg-card/25 px-3.5 py-1.5 text-[12px] font-medium tracking-[0.12em] text-foreground/90 hover:bg-card/45 sm:inline-flex"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
