import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="border-t border-border/70 pb-12 pt-12">
      <div className="container-shell space-y-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border/50 pb-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-[18px] uppercase tracking-[0.16em] text-accent/90">The choice is yours</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
              Don&apos;t share your desktop. Share twindows instead.
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Keep your real workspace private while presenting only what people need to see.
            </p>
          </div>
          <Button href="/download" variant="secondary" className="px-4 py-2.5 text-[13px] md:px-5">
            Download twindow
          </Button>
        </div>

        <div className="flex flex-col justify-between gap-6 pt-1 text-sm text-muted/85 md:flex-row md:items-center">
          <div className="text-muted/85">
            <p>Email: hello@twindow.app</p>
          </div>
          <div className="flex flex-col gap-3 text-left md:items-end md:text-right">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy-policy" className="focus-ring rounded text-muted/85 transition hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="focus-ring rounded text-muted/85 transition hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/return-policy" className="focus-ring rounded text-muted/85 transition hover:text-foreground">
                Return Policy
              </Link>
            </nav>
            <p className="text-muted/75">© {new Date().getFullYear()} twindow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
