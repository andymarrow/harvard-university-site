"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactFormMap() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
      <div className="relative bg-white dark:bg-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        
        {/* LEFT: The "Tactical" Map */}
        <div className="relative w-full h-[400px] lg:h-full group">
            {/* The Map Filter Overlay - Makes it look techy/grayscale until hover */}
            <div className="absolute inset-0 bg-slate-900/20 dark:bg-black/40 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 mix-blend-saturation" />
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.114506181166!2d38.791382!3d8.992507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859676b510c3%3A0x5cb57d91980ce09e!2sKrimson%20Aviation!5e0!3m2!1sen!2sus!4v1763676280028!5m2!1sen!2sus" 
                className="w-full h-full border-0 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white dark:bg-black px-4 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Locate Us</p>
                <p className="font-bold text-gray-900 dark:text-white">Bole Int. Airport Area</p>
            </div>
        </div>

        {/* RIGHT: The "Cockpit" Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-neutral-900">
            <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Drop us a message</h3>
                <p className="text-gray-500 dark:text-gray-400">
                    For urgent flight requests, please call the 24/7 Ops line directly. For general inquiries, use the secure channel below.
                </p>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Name</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-krimson outline-none transition-all" placeholder="Capt. John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</label>
                        <input type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-krimson outline-none transition-all" placeholder="email@company.aero" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                    <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-krimson outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Flight Support Request</option>
                        <option>Charter Quote</option>
                        <option>Partnership</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message</label>
                    <textarea rows="4" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-krimson outline-none transition-all" placeholder="Enter flight details or inquiry..."></textarea>
                </div>

                <button className="w-full bg-krimson hover:bg-red-800 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-krimson/20 group">
                    <span>Transmit Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </div>

      </div>
    </section>
  );
}