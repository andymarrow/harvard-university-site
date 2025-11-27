"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories"; // Importing your data

// Extract unique categories from stories
const ALL_CATEGORIES = ["All", ...new Set(stories.map(s => s.category))];

export default function NewsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStories, setFilteredStories] = useState(stories);

  // Filter Logic
  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = stories.filter((story) => {
      const matchesCategory = activeCategory === "All" || story.category === activeCategory;
      const matchesSearch = 
        story.title.toLowerCase().includes(lowerQuery) || 
        story.subtitle.toLowerCase().includes(lowerQuery) ||
        story.author.toLowerCase().includes(lowerQuery);
      
      return matchesCategory && matchesSearch;
    });
    setFilteredStories(results);
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4 md:px-8 transition-colors duration-500">
      
      {/* 1. HEADER & SEARCH */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
        >
            <div>
                <span className="text-harvard-crimson font-bold tracking-widest uppercase text-xs mb-2 block">
                    The Digital Gazette
                </span>
                <h1 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-white tracking-tight">
                    Global Archives
                </h1>
            </div>

            {/* Smart Search Bar */}
            <div className="w-full md:w-auto min-w-[300px] relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-harvard-crimson transition-colors h-5 w-5" />
                <input 
                    type="text" 
                    placeholder="Search topics, authors..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-harvard-crimson/20 transition-all shadow-sm font-medium text-slate-900 dark:text-white"
                />
                {searchQuery && (
                    <button 
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>
        </motion.div>

        {/* 2. DYNAMIC FILTER CHIPS */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-2 md:gap-3"
        >
            {ALL_CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                        relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                        ${activeCategory === cat 
                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg scale-105" 
                            : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-harvard-crimson hover:text-harvard-crimson"
                        }
                    `}
                >
                    {cat}
                    {activeCategory === cat && (
                        <motion.div 
                            layoutId="activePill"
                            className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white -z-10" 
                        />
                    )}
                </button>
            ))}
        </motion.div>
      </div>

      {/* 3. THE MAGIC GRID */}
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {filteredStories.map((story) => (
                    <motion.div
                        layout
                        key={story.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href={`/stories/${story.id}`} className="group flex flex-col h-full">
                            
                            {/* Card Visual */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                                <Image 
                                    src={story.heroImage} 
                                    alt={story.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800">
                                    {story.category}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                                    <span>{story.date}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span>{story.readTime}</span>
                                </div>
                                
                                <h3 className="font-serif text-2xl text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-harvard-crimson transition-colors">
                                    {story.title}
                                </h3>
                                
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {story.subtitle}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                                            {story.author.charAt(0)}
                                        </div>
                                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{story.author}</span>
                                    </div>
                                    <span className="p-2 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-harvard-crimson group-hover:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>

                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="py-32 text-center"
            >
                <div className="inline-block p-6 rounded-full bg-slate-100 dark:bg-slate-900 mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No stories found</h3>
                <p className="text-slate-500">Try adjusting your search or category filter.</p>
                <button 
                    onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                    className="mt-6 text-harvard-crimson font-bold hover:underline"
                >
                    Clear all filters
                </button>
            </motion.div>
        )}
      </div>

    </main>
  );
}