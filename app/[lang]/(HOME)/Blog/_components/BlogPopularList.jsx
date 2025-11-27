// BlogPopularList.jsx
"use client";
import React from 'react';
import PopularPostItem from './PopularPostItem';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

function BlogPopularList({ popularBlogs }) {
     if (!popularBlogs || popularBlogs.length === 0) return null;

    return (
        <motion.div
             className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-[2rem] border border-gray-200 dark:border-white/5"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
        >
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={20} className="text-krimson dark:text-amber-500" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Trending Now
                </h2>
            </div>
            
            <div className="space-y-6">
                {popularBlogs.map((blog, index) => (
                    <PopularPostItem key={blog.id} blog={blog} index={index} />
                ))}
            </div>
        </motion.div>
    );
}

export default BlogPopularList;