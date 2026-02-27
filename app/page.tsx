import { TopNav } from "@/components/top-nav";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureGridSection } from "@/components/sections/feature-grid-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <FeatureGridSection />
        <PricingSection />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  );
}
