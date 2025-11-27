"use client"; 
import React, { useState } from 'react';
import { SendHorizontal } from 'lucide-react';

function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;
    setIsSubmitting(true);

    const newComment = {
      id: Date.now(),
      author: author.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      content: content.trim(),
    };

    setTimeout(() => {
        onAddComment(newComment);
        setAuthor('');
        setContent('');
        setIsSubmitting(false);
    }, 500); // Fake delay for feel
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-neutral-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/5"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Add your perspective</h3>

      <div className="space-y-6">
          <div>
            <label htmlFor="author" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Name
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full px-5 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-krimson dark:focus:ring-amber-500 transition-all text-sm font-medium"
              disabled={isSubmitting}
              placeholder="Captain John Doe"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Comment
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              required
              className="w-full px-5 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-krimson dark:focus:ring-amber-500 transition-all text-sm font-medium resize-none"
              disabled={isSubmitting}
              placeholder="Share your thoughts..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-krimson hover:bg-red-800 text-white font-bold rounded-full shadow-lg shadow-krimson/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publishing...' : 'Post Comment'}
            {!isSubmitting && <SendHorizontal size={18} />}
          </button>
      </div>
    </form>
  );
}

export default CommentForm;