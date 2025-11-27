"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export default function EventsTicker({ events }) {
  return (
    // THEME FIX: Section bg is slightly off-white (slate-100) in light mode to make white cards pop
    <section className="py-20 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
            <h3 className="font-serif text-3xl text-slate-900 dark:text-white">Happening on Campus</h3>
            <button className="text-sm font-bold text-harvard-crimson dark:text-harvard-electric hover:underline">View Full Calendar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    // THEME FIX: Card is white (light) or slate-950 (dark)
                    className="bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow flex items-center gap-4 group cursor-pointer"
                >
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                        <Image 
                            src={event.image} 
                            alt={event.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform"
                        />
                        <div className="absolute top-0 left-0 bg-harvard-crimson text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">
                            {event.date}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors line-clamp-2">
                            {event.title}
                        </h4>
                        <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1"><MapPin size={12}/> {event.location}</span>
                            <span className="flex items-center gap-1"><Calendar size={12}/> {event.time}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}