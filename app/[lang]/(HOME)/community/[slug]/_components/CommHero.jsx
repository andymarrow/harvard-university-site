"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// Import icons HERE
import { Palette, GraduationCap, Mic, Handshake } from "lucide-react";

// Create a mapping object
const iconMap = {
  Palette,
  GraduationCap,
  Mic,
  Handshake
};

export default function CommHero({ data }) {
  // Retrieve the correct icon component based on the string name
  const Icon = iconMap[data.icon] || Palette; // Fallback to Palette if not found

  return (
    <div className="relative min-h-[70vh] flex items-center bg-slate-50 dark:bg-slate-950 overflow-hidden pt-5">
      
      {/* Background Shapes */}
      {/* <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-200 dark:bg-slate-900 rounded-l-[4rem] z-0" /> */}

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-6 border border-slate-100 dark:border-slate-700">
            <Icon className="w-4 h-4 text-harvard-crimson" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Community Impact</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-white mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-harvard-crimson font-serif italic mb-6">
            {data.subtitle}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
            {data.description}
          </p>

          {/* Stats Row */}
          <div className="flex gap-8 md:gap-12 border-t border-slate-200 dark:border-slate-800 pt-8">
            {data.stats.map((stat, i) => (
              <div key={i}>
                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}