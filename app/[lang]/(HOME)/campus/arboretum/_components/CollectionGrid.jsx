"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CollectionGrid({ items }) {
  return (
    <section className="py-24 px-6 bg-white dark:bg-stone-900">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl text-stone-900 dark:text-white mb-12">Living Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${item.size === 'large' ? 'md:col-span-2' : ''}`}
                >
                    <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                                <p className="text-stone-200 text-sm max-w-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="p-3 bg-white/20 backdrop-blur rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}