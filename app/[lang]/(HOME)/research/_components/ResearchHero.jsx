"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Building2, Medal, DollarSign, Lightbulb } from "lucide-react";
import { useRef } from "react";

const iconMap = { Building2, Medal, DollarSign, Lightbulb };

export default function ResearchHero({ data, stats }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      
      {/* Background Video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
        >
            <source src={data.video} type="video/mp4" />
        </video>
        
        {/* THEME FIX: 
            Light Mode: White fade at bottom. 
            Dark Mode: Black fade at bottom. 
        */}
        <div className="absolute inset-0 bg-white/40 dark:bg-transparent" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-slate-950 dark:via-transparent" />
        
        {/* Grid Overlay: Inverted for Light Mode visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <span className="inline-block px-3 py-1 mb-6 border border-teal-600/30 dark:border-teal-500/50 text-teal-700 dark:text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest bg-teal-50/50 dark:bg-teal-900/20 backdrop-blur-md">
                In Focus
            </span>
            <h1 className="font-serif text-5xl md:text-8xl mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
                Pushing the <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-500">
                    Boundaries
                </span> of Knowledge.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-teal-500 pl-6">
                {data.subtitle}
            </p>
        </motion.div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
                const Icon = iconMap[stat.icon];
                return (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center gap-4"
                    >
                        <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-teal-600 dark:text-teal-400">
                            <Icon size={24} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
      </div>

    </div>
  );
}