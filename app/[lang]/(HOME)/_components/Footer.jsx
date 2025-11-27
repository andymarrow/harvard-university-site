"use client";
import { GraduationCap, Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20">
      
      {/* PRE-FOOTER (The "In Focus" Section from the screenshot) */}
      <div className="px-4 md:px-8 pb-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">You May Also Like</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                    Related In Focus topics
                </h2>
            </div>

            <div className="flex flex-col gap-0 border-t border-white/10">
                {["Innovations from Harvard", "Mentorship", "Welcome to Harvard"].map((item, i) => (
                    <Link 
                        key={i} 
                        href="#" 
                        className="py-6 border-b border-white/10 text-xl font-medium hover:text-harvard-electric hover:pl-4 transition-all duration-300 flex justify-between items-center group"
                    >
                        {item}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                ))}
            </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                         <div className="bg-harvard-crimson text-white p-2 rounded-lg">
                            <GraduationCap size={32} />
                        </div>
                        <div>
                            <span className="font-serif text-2xl font-bold tracking-tight block">HARVARD</span>
                            <span className="text-xs tracking-[0.3em] uppercase opacity-70">University</span>
                        </div>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm">
                    <div>
                        <h4 className="font-bold mb-4 text-white">Security & Brand</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Copyright</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report Infringement</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Trademark Notice</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Website</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Digital Accessibility</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Statement</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Get In Touch</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Harvard</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Maps & Directions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-xs">
                    Copyright © 2025 The President and Fellows of Harvard College
                </p>
                
                <div className="flex gap-6">
                    <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                    <div className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    </div>
                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                    <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                    <Youtube className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                </div>
            </div>

        </div>
      </div>
    </footer>
  );
}