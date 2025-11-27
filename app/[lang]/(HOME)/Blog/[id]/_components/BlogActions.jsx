"use client"; 

import React, { useState } from 'react';
import { Heart, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';

function BlogActions({ initialLikes, blogTitle, blogSlug }) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: blogTitle,
        text: `Read this insight from Krimson Aviation: ${blogTitle}`,
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  const copyLink = () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
          alert("Link copied to clipboard!");
          setShowShareOptions(false);
      }).catch(err => {
          console.error('Failed to copy link: ', err);
      });
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`Check out "${blogTitle}"`);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${shareText}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blogTitle)}`;

  return (
    <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
            liked 
            ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-krimson dark:text-red-400' 
            : 'border-gray-200 dark:border-white/10 hover:border-krimson text-gray-600 dark:text-gray-400 hover:text-krimson dark:hover:text-white'
        }`}
        disabled={liked} 
      >
        <Heart className={`w-5 h-5 transition-transform group-hover:scale-110 ${liked ? 'fill-current' : ''}`} />
        <span className="font-bold text-sm">{likes} Appreciations</span>
      </button>

      {/* Share Button */}
      <div className="relative">
        <button
          onClick={handleShareClick}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
        >
          <Share2 className="w-5 h-5" />
          <span className="font-bold text-sm">Share Insight</span>
        </button>

        {/* Share Popover */}
        {showShareOptions && !navigator.share && (
            <div className="absolute left-0 bottom-full mb-4 w-48 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-2 z-20 overflow-hidden">
              <a href={twitterUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                <Twitter size={16} className="text-black dark:text-white" /> X (Twitter)
              </a>
               <a href={facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                <Facebook size={16} className="text-blue-600" /> Facebook
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                <Linkedin size={16} className="text-blue-700" /> LinkedIn
              </a>
               <button onClick={copyLink} className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors border-t border-gray-100 dark:border-white/5 mt-1 pt-2">
                 <LinkIcon size={16} className="text-amber-500" /> Copy Link
               </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default BlogActions;