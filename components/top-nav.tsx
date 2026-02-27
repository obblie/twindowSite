"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function TopNav() {
  const [active, setActive] = useState<string>(sections[0].id);

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

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/75 backdrop-blur-xl">
      <div className="container-shell flex h-14 items-center justify-between gap-3 md:h-16 md:gap-4">
        <a href="#hero" className="focus-ring inline-flex items-center gap-2 rounded-lg px-2 py-1">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Twindow</span>
          <span className="hidden text-sm text-muted sm:inline">Mirror apps, not your life.</span>
        </a>

        <nav aria-label="Section navigation" className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "focus-ring rounded-lg px-3 py-2 text-xs font-medium transition",
                active === section.id ? "bg-card text-foreground" : "text-muted hover:text-foreground"
              )}
              aria-current={active === section.id ? "page" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="#pricing" variant="secondary" className="hidden sm:inline-flex">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
