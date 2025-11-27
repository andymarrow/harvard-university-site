"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, Clock } from "lucide-react";

// Tiny component for the live clock
const TimeDisplay = ({ timezone, label }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: false };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex flex-col items-center min-w-[120px]">
      <span className="text-xs text-amber-500 font-bold tracking-widest uppercase mb-1">{label}</span>
      <span className="text-2xl font-mono font-bold text-white">{time || "--:--"}</span>
    </div>
  );
};

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-krimson/10 text-krimson dark:bg-amber-500/10 dark:text-amber-500 border border-krimson/20 dark:border-amber-500/20 mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">Ops Center Online</span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
            Establish <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-krimson to-amber-600">
                Contact.
            </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
        >
            Whether it's an AOG situation or a luxury charter request, our team is ready to deploy. Reach our Addis Ababa or Malta hubs instantly.
        </motion.p>

        {/* Live Clocks - The "Ops Room" Feel */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 bg-neutral-900 p-4 rounded-[2rem] inline-block shadow-2xl"
        >
            <TimeDisplay timezone="Africa/Addis_Ababa" label="Addis Ababa" />
            <TimeDisplay timezone="Europe/Malta" label="Malta" />
            
            {/* Quick Action */}
            <a href="mailto:ops@krimson.aero" className="bg-krimson hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex flex-col items-center justify-center min-w-[120px] transition-colors group">
                <Mail size={20} className="mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase">Email Ops</span>
            </a>
        </motion.div>

      </div>
    </section>
  );
}