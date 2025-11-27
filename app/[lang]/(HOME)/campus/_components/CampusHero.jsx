"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function CampusHero({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[90vh] w-full overflow-hidden bg-slate-950">
      
      {/* Parallax Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-60"
        >
            <source src="/videos/harvard-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 tracking-tight leading-none">
                {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12">
                {data.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 max-w-3xl">
                {data.stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-harvard-electric">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>

      
    </div>
  );
}