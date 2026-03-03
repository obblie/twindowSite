import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata: Metadata = {
  title: "Return Policy | twindow",
  description: "Return and refund policy for twindow purchases."
};

export default function ReturnPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Legal"
      title="Return Policy"
      summary="This Return Policy explains how refunds and purchase disputes are handled for twindow. It applies to purchases made directly through twindow unless a third-party marketplace requires different handling."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. Eligibility</h2>
        <p>
          If you purchased twindow directly and the product does not function materially as described, contact us within
          14 days of purchase to request a refund review. Include your order details and a short description of the issue.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Non-returnable items</h2>
        <p>
          Refunds may be denied for requests made after the review window, for misuse of the software, or where access
          was materially consumed in violation of the applicable license terms. Custom services or consulting, if offered,
          are non-refundable unless otherwise stated in writing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. How to request a refund</h2>
        <p>
          Email hello@twindow.app with your purchase receipt, device details, and the reason for the request. We may ask
          for basic troubleshooting information so we can confirm eligibility and try to resolve the problem before
          issuing a refund.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Processing</h2>
        <p>
          Approved refunds are issued back to the original payment method. Processing times depend on your payment
          provider and can take several business days after approval.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Third-party purchases</h2>
        <p>
          If you purchased twindow through a reseller, app marketplace, or payment platform with its own refund rules,
          that provider&apos;s return policy may control the transaction. In those cases, you may need to submit the request
          directly through that provider.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Policy updates</h2>
        <p>
          We may update this policy to reflect changes in the product, sales channels, or legal requirements. The latest
          version published on this page will apply going forward.
        </p>
      </section>
    </LegalPageShell>
  );
}
