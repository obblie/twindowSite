import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Getting Started | twindow",
  description: "Placeholder getting started guide for twindow setup and first-run workflow."
};

export default function GettingStartedPage() {
  return (
    <LegalPageShell
      eyebrow="Guide"
      title="Getting Started"
      summary="This page is a placeholder for a getting started guide. Replace each section with your final onboarding steps and examples."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. Getting started (Placeholder)</h2>
        <p>
          Placeholder: explain how users create their first twindow, select an application window, and move the passive
          view to a second display.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Daily workflow (Placeholder)</h2>
        <p>
          Placeholder: describe recommended workflows for presentations, classrooms, client demos, and privacy-focused
          screen sharing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Controls and settings (Placeholder)</h2>
        <p>
          Placeholder: document in-app controls, display targeting, interaction behavior, and any configuration options.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Troubleshooting (Placeholder)</h2>
        <p>
          Placeholder: list common issues, permission checks, app compatibility notes, and steps to resolve typical setup
          problems.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. FAQ links (Placeholder)</h2>
        <p>
          Placeholder: add links to the FAQ, installation guide, privacy policy, and support contact resources.
        </p>
      </section>
    </LegalPageShell>
  );
}
