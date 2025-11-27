"use client";
import Link from "next/link";
import { ArrowUpRight, Bus, Car, Accessibility } from "lucide-react";

// Map strings to components
const iconMap = {
  Bus,
  Car,
  Accessibility
};

export default function LogisticsGrid({ items }) {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => {
                const Icon = iconMap[item.icon] || Bus; 

                return (
                    <Link href="#" key={i} className="group p-8 bg-white dark:bg-slate-950 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800">
                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-harvard-crimson group-hover:text-white transition-colors">
                            <Icon size={24} />
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">{item.title}</h3>
                            <ArrowUpRight size={18} className="text-slate-300 group-hover:text-harvard-crimson transition-colors" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </Link>
                );
            })}
        </div>
      </div>
    </section>
  );
}