"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FacilitiesSlider({ facilities }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white">Home Ground</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-6 snap-x snap-mandatory">
        {facilities.map((fac, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative min-w-[300px] md:min-w-[500px] h-[400px] rounded-none snap-center group cursor-pointer"
            >
                <Image 
                    src={fac.image} 
                    alt={fac.name} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-black italic text-white uppercase mb-2 transform -skew-x-12">{fac.name}</h3>
                    <p className="text-white/80 text-sm max-w-sm">{fac.desc}</p>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}