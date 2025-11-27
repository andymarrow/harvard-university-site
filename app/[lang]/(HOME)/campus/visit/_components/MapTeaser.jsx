"use client";
import { motion } from "framer-motion";
import { MapPin, Maximize2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function MapTeaser() {
  const googleMapsUrl = "https://www.google.com/maps/place/Harvard+University/@42.3744368,-71.1208237,17z/data=!3m1!4b1!4m6!3m5!1s0x89e377427d7f0199:0x5937c65cee2427f0!8m2!3d42.3744368!4d-71.1182488!16zL20vMDN2eG0?entry=ttu";

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white mb-6">
                Navigate the <br/> <span className="text-harvard-crimson">Historic Yard.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our campus is an eclectic mix of historic architecture and cutting-edge research facilities. Use the interactive map to find libraries, museums, and hidden gems.
            </p>
            
            <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-harvard-crimson text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
                <Maximize2 size={18} /> Open Full Map
            </a>
        </div>

        {/* Right: Real Google Map Embed */}
        <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
            
            {/* The Iframe */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.5026841384947!2d-71.12082372388993!3d42.374436771191476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2set!4v1764277664785!5m2!1sen!2set" 
                className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Optional Overlay to encourage interaction (Fades out on hover) */}
            <div className="absolute inset-0 pointer-events-none border-[6px] border-white/20 rounded-[3rem] z-10" />
            
        </div>

      </div>
    </section>
  );
}