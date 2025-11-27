"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, MapPin, Ticket } from "lucide-react";

export default function MuseumList({ museums }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-12 text-center">
            Plan Your Visit
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {museums.map((museum, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="relative h-64 w-full">
                        <Image 
                            src={museum.image} 
                            alt={museum.name} 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-4">
                            {museum.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                            {museum.desc}
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                <Clock size={16} className="text-harvard-crimson" /> {museum.hours}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                <MapPin size={16} className="text-harvard-crimson" /> {museum.location}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                <Ticket size={16} className="text-harvard-crimson" /> {museum.price}
                            </div>
                        </div>

                        <button className="w-full mt-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity">
                            Visitor Info
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}