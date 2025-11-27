"use client";
import React from 'react';
import { Filter } from 'lucide-react';

function BlogFilters({ selectedCategory, onFilterChange, categories }) {
  return (
    <div className="relative min-w-[200px]">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Filter size={16} className="text-krimson dark:text-amber-500" />
      </div>
      <select
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
        className="block w-full pl-10 pr-10 py-3 text-sm bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-krimson/20 text-gray-700 dark:text-gray-200 font-medium cursor-pointer hover:border-krimson transition-colors"
      >
        <option value="">All Topics</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      
      {/* Custom Arrow */}
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
         <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-400"></div>
      </div>
    </div>
  );
}

export default BlogFilters;