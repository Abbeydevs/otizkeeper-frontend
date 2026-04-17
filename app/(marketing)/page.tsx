import { DifferenceSection } from "@/components/difference-section";
import { FinalCTA, OtizDream } from "@/components/final-sections";
import { Hero } from "@/components/hero";
import { InnovationSection } from "@/components/innovation-section";
import { OConnectSection } from "@/components/oconnect-section";
import { RecentPosts } from "@/components/recent-posts";
import { ServicePillars } from "@/components/service-pillars";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicePillars />
      <OConnectSection />
      <DifferenceSection />
      <InnovationSection />
      <RecentPosts />
      <OtizDream />
      <FinalCTA />
    </div>
  );
}
