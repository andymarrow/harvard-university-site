"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestFindings({ findings }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-800" />
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Latest Findings</span>
            <div className="h-px flex-1 bg-slate-300 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {findings.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-300">
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-950/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                            {item.category}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                    </div>

                    <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                        {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.desc}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:gap-4 transition-all">
                        Read Paper <ArrowRight size={16} />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}