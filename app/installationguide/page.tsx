import type { Metadata } from "next";
import Image from "next/image";
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

      <section className="space-y-5">
        <h2 className="text-xl font-bold">5. Permission walkthrough</h2>

        <div className="space-y-3">
          <p className="font-semibold">Step 1: Approve the macOS alert</p>
          <p>
            On first run, macOS shows a Screen Recording prompt saying twindow wants to record screen and audio. Click
            <strong> Open System Settings</strong>.
          </p>
          <Image
            src="/0macOSScreenRecordingPermissionsAlert.png"
            alt="macOS screen recording permissions alert for twindow"
            width={1836}
            height={690}
            className="w-full rounded-xl border border-border/70"
          />
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Step 2: Enable twindow in Screen &amp; System Audio Recording</p>
          <p>
            In <strong>Privacy &amp; Security</strong>, find <strong>Screen &amp; System Audio Recording</strong> and turn on
            the toggle next to <strong>twindow</strong>.
          </p>
          <Image
            src="/1systemAndAudioRecording.png"
            alt="System Settings showing twindow in screen and system audio recording permissions"
            width={2384}
            height={1548}
            className="w-full rounded-xl border border-border/70"
          />
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Step 3: Confirm Quit &amp; Reopen</p>
          <p>
            macOS may require twindow to restart before the permission takes effect. Click <strong>Quit &amp; Reopen</strong>.
          </p>
          <Image
            src="/2quitAndReopen.png"
            alt="macOS dialog asking to quit and reopen twindow after enabling recording permissions"
            width={2384}
            height={1548}
            className="w-full rounded-xl border border-border/70"
          />
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Step 4: Authenticate changes</p>
          <p>
            If prompted, enter your macOS account credentials and click <strong>Modify Settings</strong> to finalize the
            permission change.
          </p>
          <Image
            src="/3passwordEntry.png"
            alt="macOS Privacy and Security password confirmation dialog"
            width={2384}
            height={1548}
            className="w-full rounded-xl border border-border/70"
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Troubleshooting</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>If no windows appear, verify twindow has the required macOS permission and restart the app.</li>
          <li>If duplication is blank for specific apps, that app may be protected by OS/app-level capture controls.</li>
          <li>If you are using multiple displays, confirm your target display is connected and active in macOS settings.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Need help?</h2>
        <p>
          If you still have issues after completing this guide, contact <a href="mailto:hello@twindow.app">hello@twindow.app</a>{" "}
          with your macOS version and a short description of the issue.
        </p>
      </section>
    </LegalPageShell>
  );
}
