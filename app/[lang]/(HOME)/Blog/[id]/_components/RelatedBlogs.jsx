"use client";
import React from 'react';
import RelatedBlogItem from './RelatedBlogItem';
import { Link as LinkIcon } from 'lucide-react';

function RelatedBlogs({ blogs }) {
    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <LinkIcon className="text-gray-400" size={20} /> 
                Related Insights
            </h2>
            <div className="space-y-2"> 
                {blogs.map(blog => (
                    <RelatedBlogItem key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default RelatedBlogs;