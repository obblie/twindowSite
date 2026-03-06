import Link from "next/link";
import { FooterSection } from "@/components/sections/footer-section";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: React.ReactNode;
};

export function LegalPageShell({ eyebrow, title, summary, children }: LegalPageShellProps) {
  return (
    <>
      <header className="border-b border-border/70 bg-surface/80 backdrop-blur-xl">
        <div className="container-shell flex min-h-16 items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-lg px-2 py-1 font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            twindow
          </Link>
          <Link
            href="/upgrade"
            className="focus-ring rounded-lg border border-border bg-card/75 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-card"
          >
            Download
          </Link>
        </div>
      </header>

      <main className="section-wrap">
        <article className="card-surface mx-auto max-w-4xl space-y-8 p-6 md:p-10">
          <header className="space-y-3">
            <p className="kicker">{eyebrow}</p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
            <p className="max-w-3xl text-sm leading-7 text-muted md:text-base">{summary}</p>
          </header>

          <div className="space-y-8 text-sm leading-7 text-foreground/92 md:text-base">{children}</div>
        </article>
      </main>

      <FooterSection />
    </>
  );
}
