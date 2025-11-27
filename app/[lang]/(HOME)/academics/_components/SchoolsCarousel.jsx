"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { schools } from "@/data/academicsData";

export default function SchoolsCarousel() {
  const containerRef = useRef(null);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white">Our Schools</h2>
        <span className="text-slate-400 text-sm hidden md:block">Scroll to explore →</span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 px-6 md:px-12 hide-scrollbar flex gap-6 snap-x snap-mandatory">
        {schools.map((school, i) => (
            <motion.div 
                key={school.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden snap-center group cursor-pointer"
            >
                <Image 
                    src={school.image} 
                    alt={school.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-serif text-white mb-2 leading-tight">{school.name}</h3>
                    <p className="text-slate-300 text-sm mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        {school.desc}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Visit School <ArrowRight size={14} />
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}