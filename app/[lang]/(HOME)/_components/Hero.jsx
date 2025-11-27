// /app/[lang]/(HOME)/_components/Hero.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Globe, Sparkles, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-8 px-4 md:px-8 overflow-hidden bg-harvard-accent dark:bg-slate-950 transition-colors duration-500"
    >
      
      {/* 1. BACKGROUND GRID PATTERN (Adapts to Dark Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:invert dark:opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. THE TYPOGRAPHY */}
      <motion.div 
        style={{ opacity }}
        className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-4 md:mt-10"
      >
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 shadow-sm mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvard-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-harvard-electric"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-slate-200">
            One Harvard • Fall 2025
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] text-slate-900 dark:text-white tracking-tight transition-colors duration-300"
        >
          Truth For The <br />
          <span className="text-harvard-crimson dark:text-harvard-electric italic relative inline-block">
            Future.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl font-medium leading-relaxed transition-colors duration-300"
        >
          Accelerating humanity through research, education, and unwavering curiosity.
        </motion.p>
      </motion.div>

      {/* 3. THE PORTAL */}
      <motion.div 
        style={{ scale }}
        className="relative z-20 w-full max-w-[1200px] flex-1 min-h-[400px] mt-8 md:mt-12 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800 group transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />

        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-in-out"
        >
          <source src="/videos/harvard-hero.mp4" type="video/mp4" />
        </video>

        {/* 4. THE DOCK (Dark Mode Ready) */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center px-4">
          <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col md:flex-row items-center gap-2 p-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl rounded-[1.8rem] shadow-xl border border-white/20 dark:border-white/10 w-full max-w-2xl transition-colors duration-300"
          >
            
            {/* Search Input */}
            <div className="relative flex-1 w-full group/input">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within/input:text-harvard-crimson transition-colors" />
              <input 
                type="text" 
                placeholder="Ask Harvard..." 
                className="w-full h-12 md:h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 rounded-[1.4rem] border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-harvard-crimson/20 focus:ring-2 focus:ring-harvard-crimson/10 outline-none transition-all text-slate-800 dark:text-white font-medium placeholder:text-slate-400"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto">
               <button className="flex-1 md:flex-none h-12 md:h-14 px-4 md:px-6 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-[1.4rem] font-medium transition-colors text-sm md:text-base">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">Map</span>
               </button>
               
               <button className="flex-1 md:flex-none h-12 md:h-14 px-6 md:px-8 flex items-center justify-center gap-2 bg-harvard-crimson hover:bg-harvard-electric text-white rounded-[1.4rem] font-bold shadow-lg shadow-harvard-crimson/25 transition-all hover:scale-105 text-sm md:text-base">
                  <span>Start</span>
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>

          </motion.div>
        </div>

        {/* Context Label */}
        <div className="absolute bottom-28 left-8 z-20 hidden lg:block">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">Now Playing</p>
                    <p className="text-sm font-serif">Cambridge Campus • Aerial View</p>
                </div>
            </div>
        </div>

      </motion.div>

      {/* 5. SCROLL HINT */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hidden md:block"
      >
        <ChevronDown size={20} />
      </motion.div>

    </section>
  );
}