"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const ExecCard = ({ name, role, bio, image, email, linkedin, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative w-full md:w-[450px] h-[600px] rounded-[3rem] overflow-hidden shadow-2xl mx-auto cursor-pointer"
  >
    {/* Image Layer - Grayscale to Color on Hover */}
    <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-800">
        <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
        />
    </div>

    {/* Gradient Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

    {/* Text Content */}
    <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2">{role}</p>
        <h3 className="text-4xl font-bold text-white mb-4">{name}</h3>
        
        {/* Bio (Hidden on mobile, visible on desktop hover logic if needed, or just static) */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {bio}
        </p>

        {/* Social Actions */}
        <div className="flex gap-4">
            <a 
                href={linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-colors border border-white/20"
            >
                <Linkedin size={20} />
            </a>
            <a 
                href={`mailto:${email}`}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-krimson hover:text-white transition-colors border border-white/20"
            >
                <Mail size={20} />
            </a>
        </div>
    </div>
  </motion.div>
);

export default function ExecutiveTeam() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Leadership</h2>
        <p className="text-gray-600 dark:text-gray-400">Decades of combined aviation experience.</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
        <ExecCard 
            name="Dawit Lemma"
            role="Founder / Chairman & CEO"
            bio="A visionary leader with extensive experience in Swiss and African aviation sectors, driving Krimson to be a market leader."
            image="/images/dawit.jpg" // Make sure file is in public/images/
            email="dawit@krimson.aero"
            linkedin="https://www.linkedin.com/in/dawit-lemma-55958913"
            delay={0.1}
        />
        
        <ExecCard 
            name="Morry Davis"
            role="Vice-Chairman / CFO & Deputy CEO"
            bio="Bringing financial acumen and strategic oversight, Morry ensures operational stability and sustainable growth."
            image="/images/morry.jpeg" // Make sure file is in public/images/
            email="morry@krimson.aero"
            linkedin="https://www.linkedin.com/in/morrycdavis/"
            delay={0.3}
        />
      </div>
    </section>
  );
}