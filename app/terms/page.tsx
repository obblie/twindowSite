import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service | twindow",
  description: "Terms governing use of the twindow website and macOS app."
};

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Terms of Service"
      summary="These Terms of Service govern your use of the twindow website, downloads, and related services. By accessing or using twindow, you agree to these terms."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. Use of twindow</h2>
        <p>
          twindow is provided for lawful business and personal use. You agree not to misuse the website or app, interfere
          with service operation, reverse engineer protected components except where applicable law permits it, or use
          twindow to violate the rights of others.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. License</h2>
        <p>
          When you purchase or download twindow, you receive a limited, non-exclusive, non-transferable license to use
          the software for your internal use, subject to any license limits shown at checkout or in the product.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Payments</h2>
        <p>
          Paid features, if any, must be purchased through the approved checkout flow. You are responsible for providing
          accurate billing information and for any taxes, duties, or fees imposed by your jurisdiction.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Acceptable conduct</h2>
        <p>
          You may not use twindow to distribute malware, bypass security controls, infringe intellectual property, or
          engage in fraudulent, abusive, or unlawful activity. We may suspend access when necessary to protect users,
          infrastructure, or legal compliance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Intellectual property</h2>
        <p>
          The twindow name, website content, branding, software, and related materials remain the property of twindow
          and its licensors. These terms do not transfer ownership of any intellectual property rights to you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Disclaimers</h2>
        <p>
          twindow is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, we
          disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted
          availability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Platform and application restrictions</h2>
        <p>
          Some websites and macOS applications use platform-level protections that restrict or block screen capture,
          screen recording, or window duplication. These protections may be enforced by macOS, browser security models,
          DRM systems, media pipelines, or application-specific controls. twindow does not and will not bypass these
          protections. If protected content cannot be duplicated or appears blank/limited in a twindow, that behavior is
          expected and not a defect of the service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, twindow will not be liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of profits, revenue, data, or goodwill arising from or related
          to your use of the website or software.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Changes and contact</h2>
        <p>
          We may update these terms from time to time. Continued use after an update means you accept the revised terms.
          Questions about these terms can be sent to hello@twindow.app.
        </p>
      </section>
    </LegalPageShell>
  );
}
