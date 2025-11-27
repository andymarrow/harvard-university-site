import { visitHero, tourOptions, logistics, mapHotspots } from "@/data/visitData";
import VisitHero from "./_components/VisitHero";
import TourSelector from "./_components/TourSelector";
import MapTeaser from "./_components/MapTeaser";
import LogisticsGrid from "./_components/LogisticsGrid";

export const metadata = {
  title: "Visit | Harvard University",
  description: "Plan your trip to Harvard. Tours, maps, and directions.",
};

export default function VisitPage() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <VisitHero data={visitHero} />

      {/* 2. Logistics (Quick Info) */}
      <LogisticsGrid items={logistics} />

      {/* 3. Tour Options */}
      <TourSelector tours={tourOptions} />

      {/* 4. Map */}
      <MapTeaser hotspots={mapHotspots} />

    </main>
  );
}