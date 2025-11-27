"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function MuseumHero({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[85vh] w-full overflow-hidden bg-black">
      
      {/* Parallax Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full opacity-60">
        <Image 
            src={data.image} 
            alt="Harvard Art Museums" 
            fill
            className="object-cover"
            priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-harvard-crimson font-serif italic text-xl md:text-2xl mb-6"
        >
            The Collections
        </motion.span>
        
        <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-6xl md:text-9xl text-white mb-8 tracking-tighter"
        >
            {data.title}
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
        >
            {data.subtitle}
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}