"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, Users, Smartphone } from "lucide-react";

// Map strings from data to actual components
const iconMap = {
  Users,
  Smartphone
};

export default function TourSelector({ tours }) {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
            <span className="text-harvard-crimson font-bold tracking-widest uppercase text-sm">Experience Harvard</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mt-4">Choose Your Tour</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour, i) => {
                // Get the correct icon component
                const Icon = iconMap[tour.icon] || Users; 

                return (
                    <motion.div
                        key={tour.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
                    >
                        {/* Image Header */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image 
                                src={tour.image} 
                                alt={tour.title} 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                                <div className="p-3 bg-harvard-crimson rounded-full">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-2xl font-serif">{tour.title}</h3>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12 flex-1 flex flex-col">
                            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                {tour.desc}
                            </p>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                {tour.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                                        <div className="p-1 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
                                {tour.action} <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
}