"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TreeDeciduous, Wind, Sun, CloudSnow } from "lucide-react";

// Icon Map
const iconMap = { TreeDeciduous, Wind, Sun, CloudSnow };

export default function SeasonalCycle({ seasons }) {
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <section className="relative py-32 px-6 bg-stone-100 dark:bg-stone-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Left: Controls */}
        <div>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-white mb-12">
                A Landscape <br/> for <span className="italic text-green-600 dark:text-green-400">All Seasons</span>
            </h2>
            
            <div className="space-y-4">
                {seasons.map((season) => {
                    const Icon = iconMap[season.icon];
                    const isActive = activeSeason.id === season.id;
                    
                    return (
                        <button
                            key={season.id}
                            onClick={() => setActiveSeason(season)}
                            className={`
                                w-full flex items-center gap-6 p-6 rounded-3xl transition-all duration-500 text-left
                                ${isActive 
                                    ? "bg-white dark:bg-stone-800 shadow-xl scale-105" 
                                    : "hover:bg-white/50 dark:hover:bg-stone-900 opacity-60 hover:opacity-100"
                                }
                            `}
                        >
                            <div className={`p-4 rounded-full ${isActive ? 'bg-green-600 text-white' : 'bg-stone-200 dark:bg-stone-700 text-stone-500'}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <h4 className={`text-xl font-bold ${isActive ? 'text-stone-900 dark:text-white' : 'text-stone-500'}`}>
                                    {season.label}
                                </h4>
                                {isActive && (
                                    <motion.p 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="text-stone-500 dark:text-stone-400 text-sm mt-1"
                                    >
                                        {season.title}
                                    </motion.p>
                                )}
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Right: Visual Display */}
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeSeason.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image 
                        src={activeSeason.image} 
                        alt={activeSeason.title} 
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-10">
                        <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-5xl font-serif text-white mb-4"
                        >
                            {activeSeason.title}
                        </motion.h3>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-stone-200 text-lg max-w-md leading-relaxed"
                        >
                            {activeSeason.desc}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}