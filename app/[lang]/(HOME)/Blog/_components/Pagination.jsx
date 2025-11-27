"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ currentPage, totalPages, onPageChange }) {

  // Don't render if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  // Function to generate the range of pages to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // How many page numbers to display at once
    const boundaryPages = 1; // Pages always shown at the start and end

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are within limit
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Handle ellipsis
      const startEllipsis = currentPage > boundaryPages + 1;
      const endEllipsis = currentPage < totalPages - boundaryPages;

      // Add start pages
      for (let i = 1; i <= boundaryPages; i++) {
        pageNumbers.push(i);
      }

      // Add start ellipsis
      if (startEllipsis) {
        pageNumbers.push('...');
      }

      // Add pages around the current page
      let pagesAroundCurrent = maxPagesToShow - 2 * boundaryPages - (startEllipsis ? 1 : 0) - (endEllipsis ? 1 : 0);
      let startPage = Math.max(boundaryPages + 1, currentPage - Math.floor(pagesAroundCurrent / 2));
      let endPage = Math.min(totalPages - boundaryPages, currentPage + Math.ceil(pagesAroundCurrent / 2) - (pagesAroundCurrent % 2 === 0 && startEllipsis && !endEllipsis ? 1 : 0));

      // Ensure we show exactly `pagesAroundCurrent` if possible
       if (endPage - startPage + 1 < pagesAroundCurrent) {
           if (startPage > boundaryPages + 1) {
               startPage = Math.max(boundaryPages + 1, startPage - (pagesAroundCurrent - (endPage - startPage + 1)));
           } else if (endPage < totalPages - boundaryPages) {
              endPage = Math.min(totalPages - boundaryPages, endPage + (pagesAroundCurrent - (endPage - startPage + 1)));
           }
       }

      for (let i = startPage; i <= endPage; i++) {
          if (!pageNumbers.includes(i)) {
             pageNumbers.push(i);
          }
      }

       // Add end ellipsis
      if (endEllipsis) {
           if(pageNumbers.length === 0 || pageNumbers[pageNumbers.length - 1] < totalPages - boundaryPages) {
               pageNumbers.push('...');
           }
      }

      // Add end pages
      for (let i = totalPages - boundaryPages + 1; i <= totalPages; i++) {
         if (!pageNumbers.includes(i)) {
            pageNumbers.push(i);
         }
      }

      // Filter out duplicates and ensure ascending order
      return Array.from(new Set(pageNumbers)).sort((a, b) => {
          if (a === '...') return 1;
          if (b === '...') return -1;
          return a - b;
      });
    }

     return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-3 mt-16">
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        whileTap={{ scale: 0.9 }}
        className={`p-3 rounded-full transition-all flex items-center justify-center border
                   ${currentPage === 1
                       ? 'text-gray-300 border-transparent cursor-not-allowed'
                       : 'text-gray-700 border-gray-200 hover:border-krimson hover:text-krimson hover:bg-red-50 dark:text-white dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-amber-500 dark:hover:text-amber-500'
                   }`}
      >
        <ChevronLeft size={20} />
        <span className="sr-only">Previous Page</span>
      </motion.button>

      {/* Page Numbers */}
      {pageNumbers.map((number, index) => (
        number === '...' ? (
          <span key={index} className="px-2 text-gray-400 dark:text-gray-600">...</span>
        ) : (
          <motion.button
            key={number}
            onClick={() => onPageChange(number)}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-full text-sm font-bold transition-all flex items-center justify-center
                       ${currentPage === number
                           ? 'bg-krimson text-white shadow-lg shadow-krimson/30 scale-110 dark:bg-amber-500 dark:text-black dark:shadow-amber-500/20'
                           : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10'
                       }`}
          >
            {number}
          </motion.button>
        )
      ))}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileTap={{ scale: 0.9 }}
        className={`p-3 rounded-full transition-all flex items-center justify-center border
                   ${currentPage === totalPages
                       ? 'text-gray-300 border-transparent cursor-not-allowed'
                       : 'text-gray-700 border-gray-200 hover:border-krimson hover:text-krimson hover:bg-red-50 dark:text-white dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-amber-500 dark:hover:text-amber-500'
                   }`}
      >
        <ChevronRight size={20} />
        <span className="sr-only">Next Page</span>
      </motion.button>
    </div>
  );
}

export default Pagination;