"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { latestBlogs } from '@/lib/constants'; 

function LatestBlogs() {
  const blogs = latestBlogs || [
    { id: 1, title: "Navigating East African Airspace", category: "Regulations", image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=800", date: "Oct 24, 2025" },
    { id: 2, title: "The Rise of Private Jet Travel in Ethiopia", category: "Trends", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800", date: "Oct 10, 2025" },
    { id: 3, title: "Top 5 Luxury Lodges for Executive Retreats", category: "Lifestyle", image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800", date: "Sep 28, 2025" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-krimson-cream dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <span className="text-krimson dark:text-amber-500 font-bold tracking-wider uppercase text-sm">Krimson Intelligence</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-3">In The Air.</h2>
           </div>
           <Link href="/Blog" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
              View All Articles <ArrowUpRight size={18} />
           </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 bg-gray-200 dark:bg-gray-800">
                <img
                  src={blog.imageUrl || blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-krimson dark:text-amber-500 uppercase border border-transparent dark:border-white/10">
                  {blog.category || 'Aviation'}
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                 <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mb-3 border-b border-gray-200 dark:border-gray-800 pb-3">
                    <span>{blog.date}</span>
                    <span>5 min read</span>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors">
                   {blog.title}
                 </h3>
                 <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    Read Article <ArrowUpRight size={14} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden">
          <Link href="/Blog" className="flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium">
              View All Articles <ArrowUpRight size={18} />
           </Link>
        </div>

      </div>
    </section>
  );
}

export default LatestBlogs;