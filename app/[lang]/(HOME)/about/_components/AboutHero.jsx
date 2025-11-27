"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
      
      {/* Background Element - Scaled down for mobile to prevent overflow issues */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[800px] h-[300px] md:h-[800px] bg-krimson/5 dark:bg-krimson/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <span className="text-krimson dark:text-amber-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">
            Our Story
        </span>
        
        {/* Responsive Heading Sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
          Global Standards. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-amber-600">
            African Roots.
          </span>
        </h1>

        {/* Responsive Paragraph Sizes */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
          Krimson was born from a simple observation: The African aviation market demanded Swiss precision combined with deep local knowledge. We exist to bridge that gap.
        </p>
      </motion.div>

    </section>
  );
}