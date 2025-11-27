"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ArbHero({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
      
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[110%]">
        <Image 
            src={data.image} 
            alt={data.title}
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 font-bold tracking-[0.2em] uppercase text-sm mb-6"
        >
            The Tree Museum
        </motion.span>
        
        <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-6xl md:text-9xl text-white mb-8 tracking-tight drop-shadow-lg"
        >
            {data.title}
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-md"
        >
            {data.subtitle}
        </motion.p>
      </div>
    </div>
  );
}