"use client";
import React from 'react';
import Link from 'next/link';

function PopularPostItem({ blog, index }) {
    if (!blog) return null;

  return (
     <article className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-white/5 last:border-0 group">
        {/* Number with leading zero, serif font for elegance */}
        <div className="text-3xl font-bold text-gray-200 dark:text-white/10 group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors font-serif">
            {String(index + 1).padStart(2, '0')}
        </div>
        
        <Link href={`/Blog/${blog.id}`} className="block flex-grow">
             <h4 className="text-sm font-bold text-gray-800 dark:text-white mb-1 leading-snug group-hover:text-krimson transition-colors">
              {blog.title}
            </h4>
             <div className="text-xs text-gray-500 dark:text-gray-400">
                {blog.date}
            </div>
        </Link>
    </article>
  );
}

export default PopularPostItem;