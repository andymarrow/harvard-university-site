"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function AcademicsHero({ onSearch }) {
  return (
    <section className="relative pt-40 pb-20 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-harvard-crimson/5 via-transparent to-transparent opacity-50 z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-harvard-crimson font-bold tracking-widest uppercase text-xs md:text-sm mb-6 block"
        >
            Academic Excellence
        </motion.span>
        
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white mb-8 tracking-tight"
        >
            What will you <br/> 
            <span className="italic text-slate-400">discover?</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
            Explore over 3,000 courses and 140 degree programs designed to challenge, inspire, and prepare you for global leadership.
        </motion.p>

        {/* Floating Search Input */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
        >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-harvard-crimson to-orange-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-full shadow-xl">
                    <Search className="ml-6 w-6 h-6 text-slate-400 group-focus-within:text-harvard-crimson transition-colors" />
                    <input 
                        type="text"
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search programs (e.g. 'Computer Science')"
                        className="w-full py-5 px-4 bg-transparent outline-none text-lg text-slate-900 dark:text-white placeholder:text-slate-400 rounded-full"
                    />
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}