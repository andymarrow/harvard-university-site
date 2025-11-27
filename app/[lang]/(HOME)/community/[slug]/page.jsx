import { notFound } from "next/navigation";
import { communityData } from "@/data/communityData";
import CommHero from "./_components/CommHero";
import FeatureBento from "./_components/FeatureBento";
import CategorySwitcher from "./_components/CategorySwitcher";

export async function generateMetadata({ params }) {
  const data = communityData[params.slug];
  if (!data) return { title: "Community" };
  return { title: `${data.title} | Harvard Community` };
}

export default function CommunityPage({ params }) {
  const data = communityData[params.slug];

  // Handle 404 if slug doesn't exist in data
  if (!data) {
    notFound();
  }

  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* 1. Hero Section */}
      <CommHero data={data} />

      {/* 2. Feature Grid */}
      <FeatureBento features={data.features} />

      {/* 3. Navigation Switcher (Floating at bottom) */}
      <CategorySwitcher />

      {/* 4. Bottom CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-6">
          Get Involved with {data.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Whether you are a student looking to volunteer or a community member looking to participate, there is a place for you here.
        </p>
        <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
          View Upcoming Events
        </button>
      </section>

    </main>
  );
}