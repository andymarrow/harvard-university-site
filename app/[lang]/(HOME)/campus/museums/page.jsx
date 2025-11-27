import { museumHero, featuredCollections, museumsList, currentExhibitions } from "@/data/museumsData";
import MuseumHero from "./_components/MuseumHero";
import CollectionMasonry from "./_components/CollectionMasonry";
import MuseumList from "./_components/MuseumList";
import ExhibitionTicker from "./_components/ExhibitionTicker";

export const metadata = {
  title: "Museums | Harvard University",
  description: "Explore 50 centuries of human creativity at Harvard's world-class museums.",
};

export default function MuseumsPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      
      {/* 1. Immersive Dark Hero */}
      <MuseumHero data={museumHero} />

      {/* 2. Masonry Gallery of Collections */}
      <CollectionMasonry items={featuredCollections} />

      {/* 3. Bright Section: Exhibition Ticker */}
      <ExhibitionTicker exhibitions={currentExhibitions} />

      {/* 4. Practical Info List */}
      <MuseumList museums={museumsList} />

    </main>
  );
}