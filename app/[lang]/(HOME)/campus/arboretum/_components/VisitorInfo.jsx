"use client";
import { Clock, Map, Info } from "lucide-react";

const iconMap = { Clock, Map, Info };

export default function VisitorInfo({ info }) {
  return (
    <section className="py-20 px-6 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {info.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-white dark:hover:bg-stone-900 transition-colors">
                        <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                            <Icon size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-stone-900 dark:text-white mb-2">{item.title}</h4>
                            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}