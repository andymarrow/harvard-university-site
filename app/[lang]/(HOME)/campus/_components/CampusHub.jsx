"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Map, Landmark, Trophy, Trees } from "lucide-react";

// Map strings to components
const iconMap = {
  Map,
  Landmark,
  Trophy,
  Trees
};

export default function CampusHub({ sections }) {
  return (
    // THEME FIX: bg-slate-50 for light mode to differentiate from white cards, or bg-white if you want clean look.
    // Here I used bg-slate-50 (light) and bg-slate-950 (dark) to blend with the Hero fade.
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 relative z-20 -mt-12 rounded-t-[3rem]">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-16 text-center md:text-left">
            <span className="text-harvard-crimson dark:text-harvard-electric font-bold tracking-widest uppercase text-sm mb-2 block">
                Explore the Grounds
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white">
                Find Your Path
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]">
            {sections.map((item, i) => {
                const Icon = iconMap[item.icon] || Map; 
                const isLarge = i === 0; 

                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all ${isLarge ? 'md:col-span-2' : ''}`}
                    >
                        <Link href={item.link} className="block h-full w-full">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay: Stronger at bottom for text readability */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                                    <Icon size={20} />
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-200 text-sm max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-white/20 backdrop-blur rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
}