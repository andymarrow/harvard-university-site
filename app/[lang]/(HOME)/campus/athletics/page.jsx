import { athleticsHero, athleticStats, upcomingGames, featuredFacilities } from "@/data/athleticsData";
import AthleticsHero from "./_components/AthleticsHero";
import StatsStrip from "./_components/StatsStrip";
import GameSchedule from "./_components/GameSchedule";
import FacilitiesSlider from "./_components/FacilitiesSlider";

export const metadata = {
  title: "Athletics | Harvard University",
  description: "Crimson Pride. Exploring the 42 Division I teams of Harvard.",
};

export default function AthleticsPage() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <AthleticsHero data={athleticsHero} />

      {/* 2. Stats Bar */}
      <StatsStrip stats={athleticStats} />

      {/* 3. Schedule (Ticket Style) */}
      <GameSchedule games={upcomingGames} />

      {/* 4. Facilities Slider */}
      <FacilitiesSlider facilities={featuredFacilities} />

    </main>
  );
}