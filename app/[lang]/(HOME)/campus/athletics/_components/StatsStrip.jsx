"use client";
import { motion } from "framer-motion";
import { Users, Trophy, Activity, MapPin } from "lucide-react";

// Map strings to components
const iconMap = {
  Users,
  Trophy,
  Activity,
  MapPin
};

export default function StatsStrip({ stats }) {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Trophy; 
            
            return (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center md:items-start border-l-4 border-harvard-crimson pl-6"
                >
                    <Icon className="w-8 h-8 text-gray-500 mb-4" />
                    <span className="text-5xl font-black italic tracking-tighter mb-1">{stat.value}</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
                </motion.div>
            );
        })}
      </div>
    </div>
  );
}