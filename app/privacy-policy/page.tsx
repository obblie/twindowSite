import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | twindow",
  description: "Privacy policy for the twindow website and macOS app."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      summary="This Privacy Policy explains how twindow handles information when you use the website and macOS app."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. Our privacy commitment</h2>
        <p>
          twindow is built with a privacy-first approach. We do not collect, record, store, or sell your screen content,
          app window content, keystrokes, or personal workspace data. 
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Data we do not collect</h2>
        <p>
          We do not operate user tracking profiles and we do not collect personal usage analytics from the app. We do
          not sell, rent, or share personal data for advertising purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Local processing</h2>
        <p>
          twindow processes window duplication locally on your device. Screen duplication and display behavior remain on
          your Mac and are not transmitted to twindow servers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Purchases and payment providers</h2>
        <p>
          If you choose to purchase twindow, payment processing is handled by our checkout provider. That provider may
          collect billing and transaction information under its own privacy terms. twindow does not receive your full
          payment card details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Contact and policy updates</h2>
        <p>
          We may update this policy to reflect product or legal changes. The latest published version applies
          prospectively. Questions can be sent to hello@twindow.app.
        </p>
      </section>
    </LegalPageShell>
  );
}
