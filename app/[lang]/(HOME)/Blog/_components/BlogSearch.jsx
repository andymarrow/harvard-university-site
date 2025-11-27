"use client";
import React from 'react';
import { Search } from 'lucide-react';

function BlogSearch({ searchTerm, onSearchChange }) {
  return (
    <div className="relative flex-grow max-w-md">
      <input
        type="text"
        placeholder="Search insights..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-6 py-3 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-krimson/20 focus:border-krimson text-sm transition-all"
      />
      <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default BlogSearch;