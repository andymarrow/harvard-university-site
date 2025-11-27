"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const SocialCard = ({ name, icon: Icon, href, color, delay }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`relative flex flex-col justify-between p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 h-[200px] overflow-hidden group ${color}`}
  >
    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={20} className="text-white" />
    </div>
    
    <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
        <Icon size={40} />
    </div>
    
    <div>
        <p className="text-white/60 text-xs uppercase font-bold tracking-widest mb-1">Follow on</p>
        <h3 className="text-white text-2xl font-bold">{name}</h3>
    </div>
  </motion.a>
);

export default function SocialHub() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SocialCard 
                name="LinkedIn" 
                icon={Linkedin} 
                href="https://www.linkedin.com/company/krimson-aviation/"
                color="bg-[#0077B5]"
                delay={0.1}
            />
            <SocialCard 
                name="Twitter" 
                icon={Twitter} 
                href="https://twitter.com/KrimsonAviation"
                color="bg-black dark:bg-neutral-800"
                delay={0.2}
            />
            <SocialCard 
                name="Facebook" 
                icon={Facebook} 
                href="https://www.facebook.com/KrimsonAviation"
                color="bg-[#1877F2]"
                delay={0.3}
            />
            <SocialCard 
                name="Instagram" 
                icon={Instagram} 
                href="https://www.instagram.com/krimson.aviation/"
                color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
                delay={0.4}
            />
        </div>
    </section>
  );
}