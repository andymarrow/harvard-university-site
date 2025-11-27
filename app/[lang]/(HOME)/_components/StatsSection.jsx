"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// 1. Animated Counter Component
const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numeric part (e.g., "1.4" from "1.4k")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => {
    if (isDecimal) return current.toFixed(1) + suffix;
    return Math.round(current) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

// 2. Individual Stat Card
const StatItem = ({ value, label, suffix, isLive = false, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group text-center py-8 md:py-0"
  >
    {/* Hover Effect: Subtle Glow behind the number */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-krimson/5 dark:bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-3 flex items-start gap-1 tracking-tighter">
          <AnimatedNumber value={value} suffix={suffix} />
          
          {/* The "Plus" or decorative symbols */}
          {!suffix && <span className="text-2xl md:text-3xl text-krimson dark:text-amber-500 mt-1">+</span>}
          
          {/* "Live" Pulse for 24/7 Support */}
          {isLive && (
            <span className="relative flex h-3 w-3 mt-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          )}
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-[0.2em] uppercase text-xs group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors duration-300">
            {label}
        </p>
    </div>
  </motion.div>
);

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900 rounded-t-[3rem] mt-[-2rem] z-20 relative border-t border-white/50 dark:border-white/5 transition-colors duration-300 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* The Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 relative">
          
          {/* Stat 1 */}
          <StatItem value="25" label="African Hubs" delay={0} />
          
          {/* Divider 1 (Desktop) */}
          <div className="hidden md:block absolute left-1/4 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent" />

          {/* Stat 2 */}
          <StatItem value="1.4" suffix="k" label="Annual Ops" delay={0.1} />
          
          {/* Divider 2 (Desktop) */}
          <div className="hidden md:block absolute left-2/4 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent" />

          {/* Stat 3 */}
          <StatItem value="98" suffix="%" label="On-Time Perf" delay={0.2} />
          
          {/* Divider 3 (Desktop) */}
          <div className="hidden md:block absolute left-3/4 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent" />

          {/* Stat 4 */}
          <StatItem value="24" suffix="/7" label="Ops Center" isLive={true} delay={0.3} />

        </div>
      </div>
    </section>
  );
}