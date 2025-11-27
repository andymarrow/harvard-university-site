"use client";
import { ArrowUpRight } from "lucide-react";

const links = [
  "By All Means Initiative",
  "Center for Integration Science",
  "Center for International Development",
  "Center for Public Service",
  "Chayes International Fellowship",
  "Child & Family Wellbeing",
  "Climate Resilience Clinics",
  "Early Childhood Council",
  "Growth Lab",
  "Harvard Chan Day of Service",
  "Harvard Ed Portal",
  "Just City Lab",
  "Partnership for Health (HAIVN)",
  "Personal Genetics Project",
  "Phillips Brooks House",
  "Presidential Public Service",
  "Semester in Washington",
  "Women and Public Policy"
];

export default function LinkDirectory() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
            Dedicated to making <br /> a difference
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-16">
            These and many more programs across Harvard connect our community to public service opportunities around the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
            {links.map((link, i) => (
                <a 
                    key={i} 
                    href="#" 
                    className="group flex items-center justify-between py-3 border-b border-slate-300 dark:border-slate-700 hover:border-harvard-crimson dark:hover:border-harvard-electric transition-colors"
                >
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors">
                        {link}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
            ))}
        </div>

      </div>
    </section>
  );
}