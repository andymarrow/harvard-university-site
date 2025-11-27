"use client"; 
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User, Clock, Tag } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BlogContent({ blog }) {
  if (!blog) return null;

  const author = blog.author || 'Krimson Team';
  const category = blog.category || 'Aviation';

  const titleRef = useRef(null);
  const contentRef = useRef(null); 
  const [displayedTitle, setDisplayedTitle] = useState('');

  // (Keep your exact GSAP useEffects here - they are perfect)
  useEffect(() => {
    if (!blog || !blog.title || !titleRef.current) return;
    setDisplayedTitle('');
    const titleTween = gsap.to({ charIndex: 0 }, {
      charIndex: blog.title.length,
      duration: 1.5,
      ease: 'none',
      onUpdate: function() {
        const index = Math.floor(this.targets()[0].charIndex);
        setDisplayedTitle(blog.title.substring(0, index));
      },
      onComplete: () => { setDisplayedTitle(blog.title); }
    });
    return () => { titleTween.kill(); if (blog?.title) setDisplayedTitle(blog.title); };
  }, [blog?.title]);

  useLayoutEffect(() => {
      const contentElement = contentRef.current;
      if (!contentElement || !blog?.fullContent) {
          ScrollTrigger.getTweensOf(contentElement).forEach(tween => tween.kill());
          return; 
      }
      const scrollTween = gsap.from(contentElement, {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
              trigger: contentElement,
              start: 'top 80%',
              end: 'top 30%',
              scrub: true,
              markers: false, 
          }
      });
       ScrollTrigger.refresh();
      return () => {
          if (scrollTween) scrollTween.kill();
           gsap.set(contentElement, { clearProps: "opacity,filter" });
      };
  }, [blog?.fullContent]);

   useLayoutEffect(() => {
       const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 50);
       return () => clearTimeout(timer);
   }, []);

  return (
    <article className="max-w-none mx-auto">
      {/* Blog Header */}
      <header className="mb-12 text-center md:text-left">
        
        {/* Metadata Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
             <span className="px-3 py-1 rounded-full bg-krimson/10 text-krimson dark:bg-amber-500/10 dark:text-amber-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Tag size={12} /> {category}
             </span>
             <span className="px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center gap-2">
                <Clock size={12} /> {blog.readTime}
             </span>
        </div>

        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-8 min-h-[1.2em] tracking-tight">
           {displayedTitle}
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400 mb-10 border-b border-gray-100 dark:border-white/5 pb-10">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/20 flex items-center justify-center">
                    <User size={14} />
                </div>
                <span className="font-bold text-gray-900 dark:text-white">{author}</span>
             </div>
             <span className="text-gray-300 dark:text-white/20">•</span>
             <span>{blog.date}</span>
        </div>

         {/* Hero Image */}
        {blog.imageUrl && (
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video">
                 <img
                   src={blog.imageUrl}
                   alt={blog.title}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
             </div>
        )}
      </header>

      {/* Blog Content Body */}
      <div ref={contentRef} className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-krimson prose-img:rounded-3xl prose-blockquote:border-l-krimson prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:not-italic">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.fullContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default BlogContent;