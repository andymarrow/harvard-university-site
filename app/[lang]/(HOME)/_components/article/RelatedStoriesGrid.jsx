"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function RelatedStoriesGrid({ stories }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate Pagination
  const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStories = stories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // If no stories, return nothing
  if (!stories || stories.length === 0) return null;

  return (
    <div className="flex flex-col gap-12">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <h3 className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white">
            More Stories
        </h3>
        
        {/* Pagination Controls (Top Right) - Only show if needed */}
        {totalPages > 1 && (
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Page {currentPage} of {totalPages}
                </span>
                <div className="flex gap-2">
                    <button 
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        )}
      </div>

      {/* THE GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]" // Min-height prevents layout jump
      >
        <AnimatePresence mode="wait">
            {currentStories.map((related, index) => (
                <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                    <Link href={`/stories/${related.id}`} className="group flex flex-col h-full bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image 
                                src={related.heroImage} 
                                alt={related.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-full">
                                    {related.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 uppercase tracking-wider font-bold">
                                <span>{related.date}</span>
                                <span>•</span>
                                <span>{related.readTime}</span>
                            </div>
                            <h4 className="font-serif text-2xl mb-3 text-slate-900 dark:text-white group-hover:text-harvard-crimson transition-colors leading-tight">
                                {related.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
                                {related.subtitle}
                            </p>
                            <span className="text-sm font-bold text-harvard-crimson flex items-center gap-2">
                                Read Story <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
                            </span>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* FOOTER LINK */}
      <div className="flex justify-center border-t border-slate-200 dark:border-slate-800 pt-12">
         <Link href="/news" className="flex items-center gap-2 text-harvard-crimson font-bold hover:underline tracking-widest uppercase text-sm">
            View Full Archives <ArrowRight size={16} />
         </Link>
      </div>

    </div>
  );
}