"use client";
import React, { useState, useEffect, useRef } from 'react';
import CommentForm from './CommentForm';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

function CommentItem({ comment }) {
    return (
        <div className="border-b border-gray-100 dark:border-white/5 pb-6 last:border-0">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-krimson/10 text-krimson dark:text-amber-500 flex items-center justify-center font-bold text-xs">
                    {comment.author.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{comment.author}</p>
                    <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-11">
                {comment.content}
            </p>
        </div>
    );
}

function BlogComments({ initialComments, initialBlogId }) {
    const [comments, setComments] = useState(initialComments || []);
    const [isCollapsed, setIsCollapsed] = useState(false); 
    const contentRef = useRef(null);
    const [targetMaxHeight, setTargetMaxHeight] = useState('0px');

    // (Keep your exact useEffect logic for height calculation here - it is perfect)
    useEffect(() => {
        const element = contentRef.current;
        if (!element) return; 
        element.style.overflow = ''; 
        if (!isCollapsed) {
            requestAnimationFrame(() => {
                element.style.maxHeight = 'none'; 
                 element.style.overflow = 'visible'; 
                requestAnimationFrame(() => { 
                    const measuredHeight = element.scrollHeight;
                    setTargetMaxHeight(`${measuredHeight}px`);
                     element.style.overflow = '';
                    const handleTransitionEnd = () => {
                         if (!isCollapsed && parseFloat(element.style.maxHeight) >= measuredHeight) { 
                              element.style.maxHeight = 'none'; 
                          }
                    };
                     element.addEventListener('transitionend', handleTransitionEnd);
                     return () => {
                         element.removeEventListener('transitionend', handleTransitionEnd);
                     };
                });
            });
        } else {
             requestAnimationFrame(() => {
                 const startHeight = element.scrollHeight;
                 element.style.maxHeight = `${startHeight}px`;
                requestAnimationFrame(() => {
                     setTargetMaxHeight('0px');
                     return () => {};
                });
             });
              return () => {};
        }
    }, [isCollapsed, comments]); 


    const handleAddComment = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
        if (isCollapsed) setIsCollapsed(false);
    };

    const toggleCollapse = () => setIsCollapsed(prev => !prev);

    return (
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10">
            {/* Header */}
            <div
                className="flex justify-between items-center mb-8 cursor-pointer select-none group"
                onClick={toggleCollapse}
            >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <MessageSquare className="text-krimson dark:text-amber-500" size={24} /> 
                    <span>Discussion <span className="text-gray-400 font-normal text-lg">({comments.length})</span></span>
                </h2>
                 <div className="p-2 rounded-full bg-gray-50 dark:bg-white/5 group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-colors">
                      {isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                 </div>
            </div>

            {/* Content Area */}
             <div
                id={`comments-section-${initialBlogId}`}
                ref={contentRef}
                style={{ maxHeight: targetMaxHeight }}
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
             >
                <div className="space-y-6 mb-10">
                    {comments.length > 0 ? (
                        comments.map(comment => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))
                    ) : (
                        <p className="text-gray-500 italic text-center py-8 bg-gray-50 dark:bg-white/5 rounded-2xl">
                            No insights shared yet. Start the conversation.
                        </p>
                    )}
                </div>
            </div>
            
            <div>
                <CommentForm onAddComment={handleAddComment} />
            </div>
        </div>
    );
}

export default BlogComments;