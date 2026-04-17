import { InsightsHero } from "@/components/insights/insights-hero";
import { InsightsGrid } from "@/components/insights/insights-grid";
import { Newsletter } from "@/components/insights/newsletter";
import { ResourceLibrary } from "@/components/insights/resource-library";

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <div className="pt-24 md:pt-32 px-6 container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-otiz-purple" />
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-otiz-purple">
            Intelligence Hub
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-otiz-black tracking-tighter">
          Workforce Insights
        </h1>
      </div>

      <InsightsHero />
      <InsightsGrid />
      <Newsletter />
      <ResourceLibrary />
    </div>
  );
}
