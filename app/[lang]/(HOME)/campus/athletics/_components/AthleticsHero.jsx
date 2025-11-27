"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AthleticsHero({ data }) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
      
      {/* Background with "Speed Slant" Clip Path */}
      <div className="absolute inset-0 z-0">
        <Image 
            src={data.image} 
            alt="Harvard Athletics" 
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-harvard-crimson/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
        >
            <span className="inline-block px-4 py-1 bg-white text-harvard-crimson font-bold uppercase tracking-widest text-xs mb-6 transform -skew-x-12">
                Go Crimson
            </span>
            <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-none italic">
                {data.title}
            </h1>
            <p className="text-xl text-white/90 font-medium mb-10 leading-relaxed">
                {data.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-harvard-crimson font-bold uppercase tracking-wider rounded-none transform -skew-x-12 hover:bg-black hover:text-white transition-colors duration-300">
                    <span className="transform skew-x-12 inline-block">View Teams</span>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-none transform -skew-x-12 hover:bg-white/10 transition-colors">
                    <span className="transform skew-x-12 inline-block flex items-center gap-2">
                        Get Tickets <ArrowRight size={16}/>
                    </span>
                </button>
            </div>
        </motion.div>
      </div>

    </section>
  );
}