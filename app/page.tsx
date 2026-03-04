import { TopNav } from "@/components/top-nav";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { HeroMedia } from "@/components/ui/hero-media";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <HeroMedia />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <FooterSection />
    </>
  );
}
