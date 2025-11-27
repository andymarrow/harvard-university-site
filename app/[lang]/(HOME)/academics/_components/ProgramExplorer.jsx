"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { programs } from "@/data/academicsData";
import { Check } from "lucide-react";
import ProgramModal from "./ProgramModal"; // Import the modal

const FILTERS = ["All", "Undergraduate", "Graduate", "Professional"];

export default function ProgramExplorer({ searchQuery }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState(null); // State for modal

  // Filtering Logic
  const filteredPrograms = programs.filter(item => {
    // ... (Keep existing filter logic) ...
    const matchesCategory = 
        activeFilter === "All" || 
        (activeFilter === "Undergraduate" && (item.level === "Undergraduate" || item.level === "Both")) ||
        (activeFilter === "Graduate" && (item.level === "Graduate" || item.level === "Both")) ||
        (activeFilter === "Professional" && (item.level === "Professional" || item.level === "Both"));

    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
        <section id="programs" className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
        <div className="max-w-[1400px] mx-auto">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                            px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                            ${activeFilter === filter 
                                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105" 
                                : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-harvard-crimson"
                            }
                        `}
                    >
                        {activeFilter === filter && <Check size={14} />}
                        {filter}
                    </button>
                ))}
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredPrograms.map((prog, i) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={prog.title}
                            onClick={() => setSelectedProgram(prog)} // Open Modal on Click
                            className="group bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-harvard-crimson/50 dark:hover:border-harvard-electric/50 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
                        >
                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-harvard-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-slate-500 rounded-md group-hover:bg-harvard-crimson group-hover:text-white transition-colors">
                                        {prog.school}
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">{prog.degree}</span>
                                </div>
                                <h4 className="font-serif text-xl text-slate-900 dark:text-white group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors">
                                    {prog.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredPrograms.length === 0 && (
                <div className="text-center py-20 text-slate-400">
                    No programs found matching "{searchQuery}"
                </div>
            )}

        </div>
        </section>

        {/* THE MODAL COMPONENT */}
        <AnimatePresence>
            {selectedProgram && (
                <ProgramModal 
                    program={selectedProgram} 
                    onClose={() => setSelectedProgram(null)} 
                />
            )}
        </AnimatePresence>
    </>
  );
}