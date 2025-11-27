"use client";
import React from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function FeaturedSmallItem({ blog, delay }) {
  if (!blog) return null;

  return (
    <motion.article 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="group border-b border-gray-100 dark:border-white/10 pb-6 last:border-0"
    >
        <Link href={`/Blog/${blog.id}`} className="flex gap-6 items-center">
            {/* Small Thumbnail */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div>
                <span className="text-xs font-bold text-krimson dark:text-amber-500 uppercase tracking-wider mb-1 block">
                    {blog.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-krimson transition-colors">
                  {blog.title}
                </h4>
                 <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-2">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                </div>
            </div>
        </Link>
    </motion.article>
  );
}

export default FeaturedSmallItem;