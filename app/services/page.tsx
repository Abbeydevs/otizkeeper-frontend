import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { Methodology } from "@/components/services/methodology";
import { ServicesCTA } from "@/components/services/services-cta";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <ServicesHero />
      <ServicesGrid />
      <Methodology />
      <ServicesCTA />
    </div>
  );
}
