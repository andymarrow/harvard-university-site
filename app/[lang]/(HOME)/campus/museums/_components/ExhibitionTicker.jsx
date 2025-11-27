"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExhibitionTicker({ exhibitions }) {
  return (
    <section className="bg-harvard-crimson py-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-white max-w-md">
                <h3 className="font-serif text-3xl md:text-5xl mb-4">On View Now</h3>
                <p className="text-white/80 text-lg">Don't miss these limited-time exhibitions across our galleries.</p>
                <button className="mt-8 px-8 py-3 bg-white text-harvard-crimson font-bold rounded-full hover:bg-slate-100 transition-colors">
                    All Exhibitions
                </button>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 w-full md:w-auto snap-x">
                {exhibitions.map((ex, i) => (
                    <div key={i} className="relative min-w-[300px] h-[200px] rounded-2xl overflow-hidden snap-center group cursor-pointer border-4 border-white/20 hover:border-white transition-colors">
                        <Image 
                            src={ex.image} 
                            alt={ex.title} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                            <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">{ex.tag}</span>
                            <h4 className="text-xl font-serif text-white">{ex.title}</h4>
                            <p className="text-white/80 text-xs mt-2">{ex.date}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}