"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeatureBento({ features }) {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-slate-900 dark:text-white">Current Initiatives</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={feature.image} 
                alt={feature.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-2xl font-serif text-white">{feature.title}</h4>
                  <div className="p-2 bg-white/20 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}