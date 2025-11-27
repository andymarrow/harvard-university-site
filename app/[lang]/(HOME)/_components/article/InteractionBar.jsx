"use client";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, Bookmark, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractionBar() {
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [commentText, setCommentText] = useState("");
  
  const [comments, setComments] = useState([
    { id: 1, user: "Sarah Jenkins", role: "Alumni '19", time: "2h ago", text: "This story resonates so much. The transition from sports to service is not discussed enough." },
    { id: 2, user: "Dr. Aris Thorne", role: "Faculty", time: "5h ago", text: "Incredible work. The application of the community school model is vital for Boston." },
    { id: 3, user: "Marcus Lee", role: "Student", time: "1d ago", text: "Is there a way to get involved with this specific program? I'd love to volunteer." },
  ]);

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      const footerTrigger = document.getElementById("related-stories");
      if (footerTrigger) {
        const rect = footerTrigger.getBoundingClientRect();
        const offset = window.innerHeight - 100; 
        if (rect.top <= offset) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when comments are open
  useEffect(() => {
    document.body.style.overflow = showComments ? "hidden" : "unset";
  }, [showComments]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      user: "You",
      role: "Visitor",
      time: "Just now",
      text: commentText
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <>
    {/* FLOATING ACTION BAR (z-40 is fine, sits below navbar) */}
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-8 left-1/2 z-40 
                     w-fit max-w-[90vw]
                     bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl 
                     border border-slate-200 dark:border-slate-800 
                     shadow-2xl rounded-full px-6 py-3 
                     flex items-center gap-6 md:gap-8"
          style={{ transform: "translateX(-50%)" }}
        >
          {/* ... Buttons remain the same ... */}
          <button onClick={handleLike} className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-harvard-crimson dark:hover:text-harvard-electric transition-colors">
            <div className="relative">
                <Heart className={`w-6 h-6 transition-all duration-300 ${isLiked ? "fill-harvard-crimson text-harvard-crimson scale-110" : ""}`} />
                {isLiked && <motion.span initial={{ opacity: 0, y: 0, scale: 0.5 }} animate={{ opacity: 0, y: -30, scale: 1.5 }} className="absolute -top-4 -right-2 text-harvard-crimson">❤️</motion.span>}
            </div>
            <span className="text-sm font-bold min-w-[20px]">{likes}</span>
          </button>

          <button onClick={() => setShowComments(true)} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-harvard-crimson dark:hover:text-harvard-electric transition-colors">
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-bold">{comments.length}</span>
          </button>

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />

          <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
          <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><Bookmark className="w-5 h-5" /></button>
        </motion.div>
      )}
    </AnimatePresence>


    {/* COMMENT DRAWER / SLIDE-OVER */}
    <AnimatePresence>
        {showComments && (
            <>
                {/* 
                   BACKDROP: z-[140]
                   This needs to be higher than the Navbar (which is z-100) 
                   so the entire screen dims, including the nav.
                */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowComments(false)}
                    className="fixed inset-0 bg-black/40 z-[140] backdrop-blur-sm"
                />

                {/* 
                   DRAWER: z-[150]
                   This puts the drawer on top of the backdrop, and WAY on top of the Navbar.
                   Now the X button will be clickable and visible.
                */}
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white dark:bg-slate-950 shadow-2xl z-[150] flex flex-col border-l border-slate-200 dark:border-slate-800"
                >
                    {/* Drawer Header */}
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/95 dark:bg-slate-950/95 backdrop-blur-md sticky top-0 z-10">
                        <div>
                            <h3 className="font-serif text-2xl text-slate-900 dark:text-white">Discussion</h3>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Harvard Community</p>
                        </div>
                        <button 
                            onClick={() => setShowComments(false)} 
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    {/* Comments List */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {comments.map((comment) => (
                            <motion.div 
                                key={comment.id} 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-sm">
                                            {comment.user.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                                                {comment.user}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-harvard-crimson/10 text-harvard-crimson dark:bg-harvard-electric/10 dark:text-harvard-electric">
                                                    {comment.role}
                                                </span>
                                                <span className="text-xs text-slate-400">• {comment.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[52px]">
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-tr-xl rounded-b-xl rounded-tl-sm">
                                        {comment.text}
                                    </p>
                                    <div className="flex gap-4 mt-2">
                                        <button className="text-xs font-semibold text-slate-400 hover:text-harvard-crimson transition-colors">Reply</button>
                                        <button className="text-xs font-semibold text-slate-400 hover:text-harvard-crimson transition-colors">Like</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 sticky bottom-0 safe-area-pb">
                        <form onSubmit={handlePostComment} className="relative">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Share your thoughts..."
                                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-harvard-crimson/50 resize-none h-14 dark:text-white placeholder:text-slate-400"
                            />
                            <button 
                                type="submit"
                                disabled={!commentText.trim()}
                                className="absolute right-2 top-2 p-2 bg-harvard-crimson hover:bg-harvard-electric disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </motion.div>
            </>
        )}
    </AnimatePresence>
    </>
  );
}