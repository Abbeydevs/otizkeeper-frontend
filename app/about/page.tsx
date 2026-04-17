import { AboutHero } from "@/components/about/about-hero";
import { CreedsGrid } from "@/components/about/creeds-grid";
import { Leadership } from "@/components/about/leadership";
import { MetricsCard } from "@/components/about/metrics-card";
import { MissionVision } from "@/components/about/mission-vision";
import { PhilosophyFlow } from "@/components/about/philosophy-flow";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <AboutHero />
      <MissionVision />
      <PhilosophyFlow />
      <div className="pb-20 px-20">
        <MetricsCard />
      </div>
      <CreedsGrid />
      <Leadership />
    </div>
  );
}
