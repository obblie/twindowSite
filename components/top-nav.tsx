"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FontSelector } from "@/components/ui/font-selector";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "hero-demo", label: "Demo" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Use Cases" },
  { id: "faq", label: "FAQ" }
] as const;

export function TopNav() {
  const [active, setActive] = useState<string>(navItems[0].id);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === active)
  );
  const indicatorIndex = hoveredIndex ?? activeIndex;

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const marker = window.innerHeight * 0.44;
      let nextActive = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker) {
          nextActive = id;
        } else {
          break;
        }
      }

      setActive((current) => (current === nextActive ? current : nextActive));
    };

    let rafId = 0;
    const onScroll = () => {
      if (hoveredIndex !== null) setHoveredIndex(null);
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        rafId = 0;
      });
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hoveredIndex, sectionIds]);

  useEffect(() => {
    const updateIndicator = () => {
      const target = itemRefs.current[indicatorIndex];
      const nav = navRef.current;
      if (!target || !nav) return;
      const navBox = nav.getBoundingClientRect();
      const targetBox = target.getBoundingClientRect();
      setIndicatorStyle({
        left: targetBox.left - navBox.left,
        width: targetBox.width
      });
    };

    const raf = requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [indicatorIndex]);

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
            className="relative hidden justify-self-center lg:flex lg:items-center lg:gap-1 lg:-translate-x-3"
            onMouseLeave={() => setHoveredIndex(null)}
            ref={navRef}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 rounded-md bg-accent shadow-[0_0_0_1px_hsl(var(--accent)/0.45),0_8px_24px_-16px_hsl(var(--accent)/0.8)] transition-all duration-300"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => {
                  setActive(item.id);
                  setHoveredIndex(null);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "focus-ring relative z-10 rounded-md px-4 py-1.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] whitespace-nowrap transition",
                  index === indicatorIndex
                    ? "text-accent-foreground"
                    : active === item.id
                      ? "text-foreground"
                      : "text-muted/90 hover:text-foreground"
                )}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:justify-self-end">
            <div className="hidden">
              <FontSelector />
            </div>
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
