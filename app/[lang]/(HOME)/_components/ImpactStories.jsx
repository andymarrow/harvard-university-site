"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    category: "Global Health",
    title: "Supporting Oral Health",
    desc: "Harvard Dental's 'Give Veterans a Smile' program offers free care for local veterans.",
    image: "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=500&auto=format&fit=crop",
    size: "large" // Spans 2 cols
  },
  {
    category: "Alumni Impact",
    title: "Transforming Society",
    desc: "Alberto Inzulza Galdames on improving healthcare access in rural Chile.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    size: "tall" // Spans 2 rows
  },
  {
    category: "Innovation",
    title: "The Family Van",
    desc: "Mobile clinics bringing healthcare directly to underserved Boston neighborhoods.",
    image: "https://plus.unsplash.com/premium_photo-1661762445818-38f6bae716e0?w=500&auto=format&fit=crop",
    size: "standard"
  },
  {
    category: "Service",
    title: "Serving Our Country",
    desc: "A deeply interwoven history with the U.S. military dating back to colonial times.",
    image: "https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?w=500&auto=format&fit=crop",
    size: "standard"
  }
];

export default function ImpactStories() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white mb-4">
                    Impact in Action
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    From Cambridge to Chile, see how our community is turning knowledge into action.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-colors font-medium">
                View All Stories <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        {/* MOSAIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {stories.map((story, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        group relative rounded-[1.5rem] overflow-hidden cursor-pointer
                        ${story.size === 'large' ? 'md:col-span-2' : ''}
                        ${story.size === 'tall' ? 'md:row-span-2' : ''}
                    `}
                >
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0">
                        <Image 
                            src={story.image} 
                            alt={story.title} 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    </div>

                    {/* Content positioned at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-harvard-crimson text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                            {story.category}
                        </span>
                        <h3 className="font-serif text-2xl text-white mb-2 leading-tight group-hover:text-harvard-accent transition-colors">
                            {story.title}
                        </h3>
                        <p className="text-slate-200 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {story.desc}
                        </p>
                        
                        <div className="flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                            Read Story <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-8 md:hidden">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white transition-colors font-medium">
                View All Stories <ArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </section>
  );
}