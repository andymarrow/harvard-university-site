"use client";
import React from 'react';
import Link from 'next/link';
import { User, Calendar, ArrowUpRight } from 'lucide-react';

function LatestPostItem({ blog }) {
  if (!blog) return null;

  return (
    <article className="group bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/5 h-full flex flex-col">
        <Link href={`/Blog/${blog.id}`} className="flex flex-col h-full">
          
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
             <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-krimson dark:text-amber-500 uppercase tracking-wider">
                {blog.category}
             </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
               <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
               <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
            </div>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors">
              {blog.title}
            </h4>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
              {blog.excerpt}
            </p>

             <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-sm font-bold text-gray-900 dark:text-white group-hover:text-krimson transition-colors">
                <span>Read Article</span>
                <ArrowUpRight size={18} />
             </div>
          </div>
        </Link>
    </article>
  );
}

export default LatestPostItem;