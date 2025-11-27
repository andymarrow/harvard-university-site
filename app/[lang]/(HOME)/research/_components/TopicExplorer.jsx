"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function TopicExplorer({ topics }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-24 px-6 md:px-12 relative z-20 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <span className="text-teal-600 dark:text-teal-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                    Areas of Inquiry
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white">
                    The Big Questions
                </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm leading-relaxed">
                Interdisciplinary research that bridges the gap between theory and practice, science and society.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, i) => (
                <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                    <Image 
                        src={topic.image} 
                        alt={topic.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-60 dark:group-hover:opacity-80"
                    />
                    
                    {/* Gradient Overlay: Light Mode (Bottom only) vs Dark Mode (Full tint) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-black/20 dark:bg-slate-950/40 mix-blend-multiply" />
                    
                    {/* Color Accent Line */}
                    <div className={`absolute top-0 left-0 w-2 h-full ${topic.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`} />

                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-full ${topic.color} text-white shadow-lg`}>
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight group-hover:text-teal-200 transition-colors drop-shadow-md">
                            {topic.title}
                        </h3>
                        
                        <p className="text-slate-100 text-lg leading-relaxed max-w-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 drop-shadow-sm">
                            {topic.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}