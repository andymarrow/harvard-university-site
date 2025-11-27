import { researchHero, researchStats, researchTopics, featuredBreakthroughs } from "@/data/researchData";
import ResearchHero from "./_components/ResearchHero";
import TopicExplorer from "./_components/TopicExplorer";
import LatestFindings from "./_components/LatestFindings";

export const metadata = {
  title: "Research | Harvard University",
  description: "Pushing the boundaries of knowledge across science, medicine, and the humanities.",
};

export default function ResearchPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      
      {/* 1. Immersive Tech Hero */}
      <ResearchHero data={researchHero} stats={researchStats} />

      {/* 2. Dark Mode Topic Explorer */}
      <TopicExplorer topics={researchTopics} />

      {/* 3. Light/Hybrid News Feed */}
      <LatestFindings findings={featuredBreakthroughs} />

    </main>
  );
}