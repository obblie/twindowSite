import { SmartImage } from "@/components/ui/smart-image";

export function HeroMedia() {
  return (
    <div
      id="hero-demo"
      className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-2 shadow-panel"
      aria-label="Product demo"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-cyan-400/15" />
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] border border-border/70 bg-surface">
        <SmartImage
          src="/twindowAd.png"
          alt="Twindow product preview"
          fill
          className="object-cover"
          fallbackLabel="Demo preview placeholder"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          <p className="inline-flex rounded-full border border-border/70 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent backdrop-blur">
            Passive duplicate window
          </p>
        </div>
      </div>
    </div>
  );
}
