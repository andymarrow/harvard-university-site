"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Building2, Radio } from "lucide-react";

const HubCard = ({ country, address, phone, codes, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 hover:border-krimson dark:hover:border-amber-500 transition-colors shadow-lg overflow-hidden"
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-bl-[100%] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />

    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">{country}</h3>
    
    <div className="space-y-6 relative z-10">
        {/* Address */}
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-krimson dark:text-amber-500">
                <MapPin size={18} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Headquarters</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed w-3/4">
                    {address}
                </p>
            </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 text-krimson dark:text-amber-500">
                <Phone size={18} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">24/7 Dispatch</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-mono">
                    {phone}
                </p>
            </div>
        </div>

        {/* Aviation Codes - The "Pro" Touch */}
        {codes && (
            <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex gap-8">
                {codes.map((code) => (
                    <div key={code.label}>
                         <p className="text-[10px] font-bold text-krimson dark:text-amber-500 uppercase mb-1 flex items-center gap-1">
                            <Radio size={10} /> {code.label}
                         </p>
                         <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">
                            {code.val}
                         </p>
                    </div>
                ))}
            </div>
        )}
    </div>
  </motion.div>
);

export default function LocationCards() {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HubCard 
            country="Ethiopia"
            address="Bole TK Building 2, #411 Addis Ababa, Ethiopia"
            phone="+251 116 678 980"
            codes={[
                { label: "ARINC", val: "ADDKA7X" },
                { label: "AFTN", val: "KLAFXAAK" }
            ]}
            delay={0.1}
        />
        <HubCard 
            country="Malta"
            address="102, Suite 2, St. Catherine Street Attard, MALTA ATD2605"
            phone="+251 954 986 453"
            // Using same codes or empty if specific to Addis
            delay={0.2}
        />
      </div>
    </section>
  );
}