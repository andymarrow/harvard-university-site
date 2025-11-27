"use client";
import { useState } from "react";
import AcademicsHero from "./_components/AcademicsHero";
import ProgramExplorer from "./_components/ProgramExplorer";
import SchoolsCarousel from "./_components/SchoolsCarousel";
import { academicStats } from "@/data/academicsData";

export default function AcademicsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Hero with Search Input */}
      <AcademicsHero onSearch={setSearchQuery} />

      {/* 2. Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-slate-200 dark:border-slate-800 divide-x divide-slate-200 dark:divide-slate-800">
        {academicStats.map((stat, i) => (
            <div key={i} className="p-8 text-center bg-white dark:bg-slate-950">
                <div className="text-3xl md:text-4xl font-bold text-harvard-crimson mb-1">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
            </div>
        ))}
      </div>

      {/* 3. The Schools Slider */}
      <SchoolsCarousel />

      {/* 4. The Interactive Program Explorer */}
      <ProgramExplorer searchQuery={searchQuery} />

    </main>
  );
}