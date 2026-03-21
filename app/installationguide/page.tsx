import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Installation Guide | twindow",
  description: "How to install twindow on macOS and configure the required permissions."
};

export default function InstallationGuidePage() {
  return (
    <LegalPageShell
      eyebrow="Guide"
      title="Installation and Permissions Guide"
      summary="Use this guide to install twindow on macOS and grant the required permissions so window duplication works correctly."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. System requirements</h2>
        <p>twindow supports macOS Ventura (13.0) or newer on Apple Silicon Macs (M1, M2, M3, and M4).</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Download and install</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Download the latest twindow disk image from the Download button on this site.</li>
          <li>Open the downloaded <code>.dmg</code> file.</li>
          <li>Drag the twindow app into your Applications folder.</li>
          <li>Eject the mounted disk image after installation completes.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. First launch</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open twindow from Applications.</li>
          <li>If macOS shows a security prompt, confirm that you want to open the app.</li>
          <li>Follow any in-app setup prompts to begin creating your first twindow.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Required permissions</h2>
        <p>
          twindow may require screen-related system permission so macOS can allow selective window duplication. If asked,
          approve the permission request and then relaunch twindow.
        </p>
        <p>
          You can manage this manually in <strong>System Settings</strong> if needed. After changing permissions, quit
          and reopen twindow to apply the update.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Troubleshooting</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>If no windows appear, verify twindow has the required macOS permission and restart the app.</li>
          <li>If duplication is blank for specific apps, that app may be protected by OS/app-level capture controls.</li>
          <li>If you are using multiple displays, confirm your target display is connected and active in macOS settings.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Need help?</h2>
        <p>
          If you still have issues after completing this guide, contact <a href="mailto:hello@twindow.app">hello@twindow.app</a>{" "}
          with your macOS version and a short description of the issue.
        </p>
      </section>
    </LegalPageShell>
  );
}

