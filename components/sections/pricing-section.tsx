import { PricingCards } from "@/components/sections/pricing-cards";
import { getPricingCatalog } from "@/lib/lemonsqueezy";

export async function PricingSection() {
  const initialCatalog = await getPricingCatalog();
  return <PricingCards initialCatalog={initialCatalog} />;
}
