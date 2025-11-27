"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function VisitHero({ data }) {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      <Image 
        src={data.image} 
        alt="Visit Harvard" 
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
        >
            {data.title}
        </motion.h1>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl"
        >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {data.subtitle}
            </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown />
      </div>
    </div>
  );
}