"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CollectionMasonry({ items }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-900">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white">Curated Collections</h2>
            <button className="text-white text-sm uppercase tracking-widest hover:text-harvard-crimson transition-colors">
                View All Objects
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {items.map((item, i) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        group relative rounded-lg overflow-hidden bg-neutral-800
                        ${item.size === 'large' ? 'md:col-span-2' : ''}
                        ${item.size === 'tall' ? 'md:row-span-2' : ''}
                    `}
                >
                    <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover rounded-4xl transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-harvard-crimson text-xs font-bold uppercase tracking-wider mb-2">Collection</span>
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm max-w-sm">{item.desc}</p>
                            </div>
                            <div className="p-3 border border-white/30 rounded-full text-white">
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