"use client";
import React from 'react';
import FeaturedLargeItem from './FeaturedLargeItem';
import FeaturedSmallItem from './FeaturedSmallItem';
import { motion } from 'framer-motion';

function BlogFeatured({ featuredBlogs }) {
    const largeFeatured = featuredBlogs && featuredBlogs.length > 0 ? featuredBlogs[0] : null;
    const smallFeatured = featuredBlogs && featuredBlogs.length > 1 ? featuredBlogs.slice(1) : [];

    return (
        <motion.div
           className="mb-16" 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                    Editor's Pick
                    {/* Gold Underline */}
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Large Item takes 2 columns */}
                <div className="lg:col-span-2">
                     {largeFeatured && <FeaturedLargeItem blog={largeFeatured} />}
                </div>
                
                {/* Small Items Stacked on the right */}
                <div className="flex flex-col gap-8 justify-center"> 
                    {smallFeatured.map((blog, i) => (
                       <FeaturedSmallItem key={blog.id} blog={blog} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default BlogFeatured;