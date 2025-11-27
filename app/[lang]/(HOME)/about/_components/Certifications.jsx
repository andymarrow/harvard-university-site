"use client";
import Image from "next/image";

export default function Certifications() {
  // You can replace these strings with actual logo image paths if you have them
  const certs = ["AfBAA", "EBAA", "NBAA", "MBBA"]; 

  return (
    <section className="py-20 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
            Proud Member of
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Assuming you have the logo images, otherwise we use text placeholders styled nicely */}
            {certs.map((cert) => (
                <div key={cert} className="text-3xl font-bold text-gray-300 hover:text-krimson dark:hover:text-amber-500 cursor-default transition-colors">
                    {cert}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}