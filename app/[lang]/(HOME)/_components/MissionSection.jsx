"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Users, Heart, BookOpen, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// We convert the "inline links" from the original site into structured data cards
const communityResources = [
  { 
    title: "Arts & Culture", 
    desc: "Exhibitions & Public Events", 
    icon: <Heart className="w-5 h-5" />, 
    href: "/community/arts" 
  },
  { 
    title: "Youth Programs", 
    desc: "Mentorship & Tutoring", 
    icon: <Users className="w-5 h-5" />, 
    href: "/community/youth" 
  },
  { 
    title: "Public Lectures", 
    desc: "Open Learning Access", 
    icon: <BookOpen className="w-5 h-5" />, 
    href: "/community/lectures" 
  },
  { 
    title: "Local Partnerships", 
    desc: "Boston & Cambridge", 
    icon: <Building2 className="w-5 h-5" />, 
    href: "/community/partners" 
  },
];

export default function MissionSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-white dark:bg-slate-950 transition-colors duration-500">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24">
            <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-harvard-crimson dark:text-harvard-electric font-bold tracking-widest uppercase text-sm mb-4 block"
            >
                Public Service, Public Good
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white max-w-3xl leading-tight"
            >
                Harvard is not an island. <br />
                <span className="text-slate-400 dark:text-slate-500">We are a neighbor.</span>
            </motion.h2>
        </div>

        {/* THE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: THE MEDIA (VIDEO CARD) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-7 relative group rounded-[2rem] overflow-hidden aspect-video shadow-2xl border border-slate-200 dark:border-slate-800"
            >
                {/* Image Placeholder for Video */}
                <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Community Service Day" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                </div>

                {/* Caption Tag */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-sm font-semibold text-slate-900 dark:text-white">
                    Join us for a Day of Service
                </div>
            </motion.div>


            {/* RIGHT: THE "DASHBOARD" (TEXT + LINKS) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 flex flex-col justify-center h-full"
            >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Serving our community
                </h3>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    Events and programming offered by the <span className="text-harvard-crimson dark:text-harvard-electric font-medium">Harvard Ed Portal</span> support our neighbors and the greater community. Throughout the year, we unite to organize seasonal drives and partner with local non-profits.
                </p>

                {/* THE INNOVATION: LINK CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {communityResources.map((item, i) => (
                        <Link key={i} href={item.href} className="group block">
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-harvard-crimson/30 dark:hover:border-harvard-electric/30 hover:shadow-lg dark:hover:shadow-harvard-electric/10 transition-all duration-300 relative overflow-hidden">
                                
                                {/* Hover Glow Background */}
                                <div className="absolute inset-0 bg-harvard-crimson/5 dark:bg-harvard-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-harvard-crimson dark:text-harvard-electric mb-3 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                                </div>
                                
                                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-slate-300 group-hover:text-harvard-crimson dark:group-hover:text-harvard-electric transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                     <Link href="/community" className="inline-flex items-center gap-2 text-harvard-crimson dark:text-harvard-electric font-bold hover:underline">
                        Explore the Ed Portal
                        <ArrowUpRight className="w-4 h-4" />
                     </Link>
                </div>

            </motion.div>

        </div>
      </div>
    </section>
  );
}