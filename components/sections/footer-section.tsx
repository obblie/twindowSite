import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="border-t border-border/70 pb-12 pt-10">
      <div className="container-shell space-y-8">
        <div className="card-surface flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">The Choice is Yours</p>
            <h2 className="mt-2 text-2xl font-bold">Don't share your desktop with ANYONE. Share twindows instead  🙂</h2>
          </div>
          <Button href="#pricing">Download twindow</Button>
        </div>

        <div className="flex flex-col justify-between gap-6 text-sm text-muted md:flex-row md:items-center">
          <div>
            <p>Email: hello@twindow.app</p>
          </div>
          <div className="flex flex-col gap-3 text-left md:items-end md:text-right">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/terms" className="focus-ring rounded text-muted transition hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/return-policy" className="focus-ring rounded text-muted transition hover:text-foreground">
                Return Policy
              </Link>
            </nav>
            <p>© {new Date().getFullYear()} twindow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
