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
          <Button href="#pricing">Download Twindow</Button>
        </div>

        <div className="flex flex-col justify-between gap-4 text-sm text-muted md:flex-row md:items-center">
          <div>
            <p>Email: hello@twindow.app</p>
            <p>Socials: @twindowapp (X, YouTube, GitHub)</p>
          </div>
          <div className="text-left md:text-right">
            <p>Privacy note: Local-only duplication. No account required.</p>
            <p>© {new Date().getFullYear()} Twindow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
