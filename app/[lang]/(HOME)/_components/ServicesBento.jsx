"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Map, Briefcase, HeartPulse, Wrench } from "lucide-react";

// Reusable Card Component
const ServiceCard = ({ title, desc, icon: Icon, className, image, delay, isSmall = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`group relative overflow-hidden rounded-[2rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 ${className}`}
  >
    {/* Dark Overlay for Text Readability */}
    <div className={`absolute inset-0 z-10 bg-gradient-to-b ${isSmall ? 'from-black/20 to-black/80' : 'from-transparent via-black/20 to-black/80'}`} />
    
    {/* Background Image */}
    <div className="absolute inset-0">
       <img 
         src={image} 
         alt={title} 
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100 dark:opacity-90" 
       />
    </div>

    {/* Content */}
    <div className={`relative z-20 h-full flex flex-col ${isSmall ? 'justify-between p-5' : 'justify-end p-8'} text-white`}>
      
      {/* Icon Bubble */}
      <div className={`${isSmall ? 'w-10 h-10 mb-0' : 'w-12 h-12 mb-auto'} bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-krimson group-hover:border-krimson transition-colors duration-300`}>
        <Icon size={isSmall ? 18 : 24} className="text-white" />
      </div>
      
      {/* Text Block */}
      <div>
        <h3 className={`${isSmall ? 'text-lg' : 'text-2xl'} font-bold mb-1`}>{title}</h3>
        
        {/* Description: Hidden on small cards unless hovered, visible on large cards */}
        <p className={`text-gray-200 text-sm ${isSmall ? 'hidden group-hover:block mb-2' : 'mb-4'} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
            {desc}
        </p>
        
        {/* Button/Link Indicator */}
        {!isSmall && (
            <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all text-white/90 hover:text-white">
                Learn More <ArrowUpRight size={16} />
            </button>
        )}
      </div>
    </div>
  </motion.div>
);

export default function ServicesBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
      
      {/* 1. FLIGHT SUPPORT (Large Card) */}
      {/* Image: Private Jet on Tarmac - Professional, Logistical */}
      <ServiceCard 
        title="Flight Support"
        desc="Comprehensive ground handling, overflight permits, and fueling solutions across 54 African nations."
        icon={Map}
        image="https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2000&auto=format&fit=crop"
        className="md:col-span-2 md:row-span-2"
        delay={0.1}
      />

      {/* 2. LUXURY KONCIERGE (Medium Card) */}
      {/* Image: Luxury Safari Lodge - High-end, Experience-driven */}
      <ServiceCard 
        title="Luxury Koncierge"
        desc="Bespoke travel itineraries, VIP transfers, and exclusive lodge access."
        icon={Briefcase}
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
        className="md:col-span-1 md:row-span-1"
        delay={0.2}
      />

      {/* 3. & 4. SPLIT CARDS (Small Cards) */}
      <div className="grid grid-cols-2 gap-4 md:col-span-1 md:row-span-1">
         
         {/* AEROMEDICAL */}
         {/* Image: Air Ambulance / Medical Helicopter context */}
         <ServiceCard 
            title="Aeromedical"
            desc="24/7 Emergency Evacuation."
            icon={HeartPulse}
            image="https://plus.unsplash.com/premium_photo-1664303503818-a6fab2dcfd91?w=500&auto=format&fit=crop"
            className="col-span-1"
            delay={0.3}
            isSmall={true}
         />

         {/* MRO TECH */}
         {/* Image: Jet Engine / Maintenance precision */}
         <ServiceCard 
            title="MRO Tech"
            desc="Certified Maintenance Support."
            icon={Wrench}
            image="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop"
            className="col-span-1"
            delay={0.4}
            isSmall={true}
         />
      </div>
    </div>
  );
}