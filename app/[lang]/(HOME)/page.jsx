import Hero from "./_components/Hero";
import MissionSection from "./_components/MissionSection";
import ImpactStories from "./_components/ImpactStories";
import QuoteSpotlight from "./_components/QuoteSpotlight";
import NewsFeed from "./_components/NewsFeed";
import LinkDirectory from "./_components/LinkDirectory";
import { stories } from "@/data/stories"; 

export default function Home() {
  // 1. Get specific stories for the Quote Sections
  const kazembe = stories.find(s => s.id === 'kazembe-abif');
  const david = stories.find(s => s.id === 'david-marchese');

  // 2. Get specific stories for the News Feed Section
  const projectSwim = stories.find(s => s.id === 'project-swim');
  
  // Filter sidebar items (exclude the feature story)
  const sidebarNews = stories.filter(s => 
    ['irene-wong', 'kavya-krishna', 'dashiell-young'].includes(s.id)
  );

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Hero />
      <div className="relative z-10 bg-white dark:bg-slate-950 rounded-t-[3rem] -mt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] dark:shadow-none border-t border-transparent dark:border-slate-800">
        <MissionSection />
        <ImpactStories />

        {/* Quote 1 */}
        {kazembe && (
            <QuoteSpotlight 
              id={kazembe.id}
              title="Inspiring the next generation"
              quote={kazembe.quote}
              author="Kazembe Abif"
              role={kazembe.role}
              image={kazembe.heroImage}
            />
        )}

        {/* NEWS FEED: Now passing dynamic data */}
        {projectSwim && (
            <NewsFeed 
                featured={projectSwim} 
                sidebar={sidebarNews} 
            />
        )}

        {/* Quote 2 */}
        {david && (
            <QuoteSpotlight 
              id={david.id}
              title="Doing their civic duty"
              quote={david.quote}
              author="David Marchese"
              role={david.role}
              image={david.heroImage}
              reversed={true}
            />
        )}

        <LinkDirectory />
      </div>
    </main>
  );
}