"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, Link as LinkIcon, GraduationCap, Building2 } from "lucide-react";
import { useEffect } from "react";

export default function ProgramModal({ program, onClose }) {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "unset";
  }, []);

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
      
      {/* 1. Backdrop (Click to close) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* 2. Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-950 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
      >
        
        {/* HEADER IMAGE SECTION */}
        <div className="relative h-48 md:h-64 shrink-0">
            <Image 
                src={program.heroImage || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"} 
                alt={program.title}
                fill
                className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors"
            >
                <X size={20} />
            </button>

            {/* Title Block */}
            <div className="absolute bottom-0 left-0 w-full p-8">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">{program.title}</h2>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1.5"><Building2 size={14}/> {program.school}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors"><LinkIcon size={14}/> Copy Link</button>
                </div>
            </div>
        </div>

        {/* CONTENT SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-12 bg-white dark:bg-slate-950">
            
            {/* Description */}
            <div>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {program.description || "This program offers a comprehensive curriculum designed to prepare students for leadership in the field, combining theoretical foundations with practical application."}
                </p>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />

            {/* Degree Sections (Like Harvard Accordions) */}
            {program.degrees ? (
                <div className="space-y-10">
                    {program.degrees.map((deg, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-2">
                                    {deg.type} Program
                                </h3>
                                <div className="text-sm font-bold text-harvard-crimson uppercase tracking-wider mb-4 md:mb-0">
                                    {deg.name}
                                </div>
                            </div>
                            
                            <div className="md:w-2/3">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                        <GraduationCap size={16} />
                                        {deg.school}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {deg.info}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        Learn more <ArrowRight size={16} />
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-harvard-crimson hover:bg-harvard-electric text-white font-bold transition-colors shadow-lg shadow-harvard-crimson/20">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Fallback if no specific degree data */
                <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="flex-1">
                        <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-4">Program Details</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Explore the curriculum, faculty, and research opportunities available in this department. 
                            Harvard offers world-class resources to support your academic journey.
                        </p>
                     </div>
                     <div className="flex flex-col gap-3 w-full md:w-auto">
                        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-harvard-crimson hover:bg-harvard-electric text-white font-bold transition-colors shadow-lg">
                            Visit Department Website <ArrowRight size={16} />
                        </button>
                     </div>
                </div>
            )}

        </div>

      </motion.div>
    </div>
  );
}