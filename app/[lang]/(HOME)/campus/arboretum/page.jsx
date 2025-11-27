import { arbHero, arbStats, seasonalCycle, collections, visitorInfo } from "@/data/arboretumData";
import ArbHero from "./_components/ArbHero";
import SeasonalCycle from "./_components/SeasonalCycle";
import CollectionGrid from "./_components/CollectionGrid";
import VisitorInfo from "./_components/VisitorInfo";

export const metadata = {
  title: "Arnold Arboretum | Harvard University",
  description: "A living museum of trees dedicated to research and recreation.",
};

export default function ArboretumPage() {
  return (
    <main className="bg-stone-50 dark:bg-stone-950 min-h-screen">
      
      {/* 1. Immersive Nature Hero */}
      <ArbHero data={arbHero} />

      {/* 2. Stats Strip */}
      <div className="bg-stone-900 text-white py-12 border-b border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {arbStats.map((stat, i) => (
                <div key={i}>
                    <div className="text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-stone-400">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* 3. Interactive Seasonal Explorer */}
      <SeasonalCycle seasons={seasonalCycle} />

      {/* 4. Living Collections Grid */}
      <CollectionGrid items={collections} />

      {/* 5. Visitor Logistics */}
      <VisitorInfo info={visitorInfo} />

    </main>
  );
}