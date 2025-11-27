"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link

export default function NewsFeed({ featured, sidebar }) {
  // Guard clause in case data isn't passed yet
  if (!featured || !sidebar) return null;

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FEATURE STORY (Left - Spans 7 cols) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* LINK TO DYNAMIC PAGE */}
              <Link href={`/stories/${featured.id}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    <Image 
                      src={featured.heroImage} 
                      alt={featured.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{featured.author}</span>
                    <h3 className="font-serif text-4xl text-slate-900 dark:text-white group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                      {featured.subtitle}
                    </p>
                  </div>
              </Link>
            </motion.div>
          </div>

          {/* SIDEBAR FEED (Right - Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {sidebar.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* LINK TO DYNAMIC PAGE */}
                  <Link href={`/stories/${item.id}`} className="flex gap-4 group cursor-pointer items-start">
                      <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                        <Image 
                          src={item.heroImage} 
                          alt={item.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">{item.category}</span>
                        <h4 className="font-medium text-slate-900 dark:text-slate-200 group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View More Button - Link to Filter Page */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
               <Link href="/news" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-harvard-crimson dark:hover:text-harvard-electric transition-colors">
                  View All Campus Stories <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}