"use client";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link

export default function QuoteSpotlight({ 
  id, // Add ID prop
  quote, 
  author, 
  role, 
  image, 
  reversed = false, 
  title = "Inspiring the next generation" 
}) {
  return (
    <section className="py-24 px-4 md:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white mb-12"
        >
          {title}
        </motion.h2>

        <div className={`flex flex-col gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden">
              <Image src={image} alt={author} fill className="object-cover" />
              <div className="absolute bottom-6 right-6 bg-harvard-crimson text-white px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase">
                Harvard
              </div>
            </div>
            <div className={`absolute -z-10 w-full h-full top-6 ${reversed ? 'right-6' : 'left-6'} bg-slate-100 dark:bg-slate-800 rounded-[2rem]`} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:pl-12"
          >
            <Quote className="w-12 h-12 text-harvard-crimson/20 dark:text-harvard-electric/20 mb-6" />
            <h3 className="font-serif text-3xl md:text-5xl leading-tight text-slate-900 dark:text-white mb-8">“{quote}”</h3>
            <div className="border-l-4 border-harvard-crimson dark:border-harvard-electric pl-6">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">{author}</h4>
              <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{role}</p>
            </div>

            {/* DYNAMIC LINK */}
            <Link 
                href={`/stories/${id}`} 
                className="mt-8 inline-flex items-center gap-2 text-harvard-crimson dark:text-harvard-electric font-bold group hover:underline"
            >
              Read more about this journey 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}