"use client";
import React from 'react';
import Link from 'next/link';
import { User, Clock, ArrowRight, Tag } from 'lucide-react';

function FeaturedLargeItem({ blog }) {
  if (!blog) return null;

  return (
    <article className="group relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer">
      <Link href={`/Blog/${blog.id}`}>
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0">
            <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-medium text-gray-300 mb-4">
                <span className="bg-krimson px-3 py-1 rounded-full text-white flex items-center gap-1">
                    <Tag size={12} /> {blog.category}
                </span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-amber-400 transition-colors">
              {blog.title}
            </h3>
            
            <p className="text-gray-300 line-clamp-2 max-w-xl text-lg mb-6">
              {blog.excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-white font-bold border-b border-amber-500 pb-1 group-hover:gap-4 transition-all">
                Read Full Story <ArrowRight size={18} className="text-amber-500" />
            </span>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedLargeItem;