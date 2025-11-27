"use client"; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

function RelatedBlogItem({ blog }) {
    if (!blog || !blog.id) return null;

    return (
        <Link href={`/Blog/${blog.id}`} className="block group">
            <div className="flex gap-5 items-start p-4 -mx-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300">
                {/* Image */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-gray-100 dark:border-white/10">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-grow pt-1">
                    <span className="text-[10px] font-bold text-krimson dark:text-amber-500 uppercase tracking-widest mb-1 block">
                        Read Next
                    </span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-krimson transition-colors">
                        {blog.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}

export default RelatedBlogItem;