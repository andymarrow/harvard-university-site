import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { stories } from "@/data/stories"; 
import InteractionBar from "../../_components/article/InteractionBar";
import RelatedStoriesGrid from "../../_components/article/RelatedStoriesGrid"; // IMPORT THE NEW GRID

// 1. Generate Metadata dynamically
export async function generateMetadata({ params }) {
  const story = stories.find((s) => s.id === params.id);
  if (!story) return { title: "Story Not Found" };
  return { title: `${story.title} | Harvard Stories` };
}

// 2. The Page Component
export default function StoryPage({ params }) {
  const story = stories.find((s) => s.id === params.id);

  // Handle 404
  if (!story) {
    notFound();
  }

  // Get related stories (exclude current one)
  // This passes ALL related stories to the client component, which handles pagination
  const relatedStories = stories.filter((s) => s.id !== params.id);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pb-32">
      
      {/* HEADER (Sticky) */}
      <header className="fixed z-50 pointer-events-none
        top-24 left-0 w-full px-4
         lg:left-8 lg:w-auto lg:px-0"
      >
        <Link 
            href="/" 
            className="pointer-events-auto inline-flex items-center gap-2 
            px-4 py-2 md:px-5 md:py-2.5 
            bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-xl 
            rounded-full text-white transition-all duration-300 
            font-medium text-xs md:text-sm 
            border border-white/20 shadow-xl hover:scale-105 hover:border-white/40"
        >
            <ArrowLeft size={14} className="md:w-4 md:h-4" /> 
            <span>Back to Campus</span>
        </Link>
      </header>

      {/* HERO SECTION */}
      <div className="relative min-h-[90vh] md:h-[85vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 w-full h-full">
            <Image 
                src={story.heroImage} 
                alt={story.title} 
                fill
                className="object-cover"
                priority
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 z-10" />
        
        <div className="relative z-20 w-full p-6 md:p-12 lg:p-24 pb-12 md:pb-24">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
                    {story.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-harvard-crimson text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] text-white mb-4 md:mb-8 tracking-tight">
                    {story.title}
                </h1>
                <p className="text-lg md:text-3xl text-slate-200 max-w-3xl leading-relaxed md:leading-normal font-light mb-8 border-l-4 border-harvard-crimson pl-4 md:pl-6 hidden sm:block">
                    {story.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-xs md:text-sm font-medium">
                    <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-harvard-crimson flex items-center justify-center text-[10px] font-bold">
                             {story.author.charAt(0)}
                        </div>
                        <span>By {story.author}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300">
                        <div className="flex items-center gap-2">
                             <Calendar size={14} className="text-harvard-crimson" /> {story.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-harvard-crimson" /> {story.readTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 py-12 md:py-20">
         <div className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
             <div className="border-l border-slate-200 dark:border-slate-800 pl-6 space-y-6">
                 <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Category</h4>
                    <p className="text-lg font-serif">{story.category}</p>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Role</h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{story.role}</p>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Share</h4>
                    <div className="flex gap-4 text-slate-500">
                        <div className="hover:text-harvard-crimson cursor-pointer transition-colors">LinkedIn</div>
                        <div className="hover:text-harvard-crimson cursor-pointer transition-colors">Twitter</div>
                        <div className="hover:text-harvard-crimson cursor-pointer transition-colors">Email</div>
                    </div>
                 </div>
             </div>
         </div>

         <div className="lg:col-span-7 prose prose-lg md:prose-xl dark:prose-invert prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-headings:font-serif prose-a:text-harvard-crimson max-w-none">
            {story.content.map((paragraph, index) => (
                <div key={index}>
                    <p className={index === 0 ? "first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-harvard-crimson first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px] first-letter:font-bold" : "mb-6 leading-relaxed"}>
                        {paragraph}
                    </p>
                    {index === 2 && (
                         <div className="my-12 p-8 md:p-12 bg-slate-50 dark:bg-slate-900 border-l-4 border-harvard-crimson rounded-r-2xl shadow-sm">
                            <h3 className="font-serif text-xl md:text-3xl italic mb-4 leading-tight text-slate-900 dark:text-white">
                                "{story.quote}"
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="h-px w-8 bg-slate-400"></div>
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">{story.title} (Excerpt)</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
         </div>
      </article>

      {/* RELATED STORIES (Now using the new Client Component) */}
      <section id="related-stories" className="dark:bg-slate-900/50 py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-[1400px] mx-auto px-6">
             {/* We pass all stories; the component handles the slice(0,6) */}
             <RelatedStoriesGrid stories={relatedStories} />
          </div>
      </section>

      {/* INTERACTION BAR */}
      <InteractionBar />

    </main>
  );
}