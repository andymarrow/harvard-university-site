import { campusHero, campusSections, eventsPreview } from "@/data/campusData";
import CampusHero from "./_components/CampusHero";
import CampusHub from "./_components/CampusHub";
import EventsTicker from "./_components/EventsTicker";

export const metadata = {
  title: "Campus | Harvard University",
  description: "Explore the historic and innovative grounds of Harvard University.",
};

export default function CampusPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* 1. Cinematic Video Hero */}
      <CampusHero data={campusHero} />

      {/* 2. The Navigation Hub (Bento Grid) */}
      <CampusHub sections={campusSections} />

      {/* 3. Live Events Ticker */}
      <EventsTicker events={eventsPreview} />

    </main>
  );
}