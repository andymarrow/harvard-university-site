"use client";
import { motion } from "framer-motion";
import { Timer, Users, Globe, ShieldCheck } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-krimson/30 dark:hover:border-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-xl group"
  >
    <div className="shrink-0">
      <div className="w-16 h-16 rounded-2xl bg-krimson/10 dark:bg-amber-500/10 flex items-center justify-center group-hover:bg-krimson group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-black transition-all duration-300 text-krimson dark:text-amber-500">
        <Icon size={32} />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function WhyKrimson() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: The Philosophy Text */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pr-0 lg:pr-12"
        >
            <span className="text-krimson dark:text-amber-500 font-bold tracking-wider uppercase text-sm mb-2 block">
                The Krimson Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Global Standards.<br/>
                <span className="text-gray-400 dark:text-gray-600">African Execution.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our success is built on the relationships we foster. We don't just file flight plans; we navigate the complexities of African aviation regulations so you don't have to.
            </p>
            
            {/* Certification Badges (Replaces the bottom logos from old site) */}
            <div className="flex flex-wrap gap-4 items-center">
                <span className="text-xs text-gray-400 uppercase tracking-widest mr-2">Proud Member of:</span>
                {['NBAA', 'EBAA', 'AfBAA', 'Fsf'].map((cert) => (
                    <div key={cert} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-bold border border-gray-200 dark:border-white/5">
                        {cert}
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Right: The Features Grid */}
        <div className="flex flex-col gap-6">
            <FeatureItem 
                icon={Timer}
                title="Speed & Efficiency"
                desc="We turn 'African Time' into 'On Time'. Our local presence ensures permits are cleared faster than remote agencies."
                delay={0.2}
            />
            <FeatureItem 
                icon={Users}
                title="The 'Can-Do' Team"
                desc="Led by industry veterans, our team combines Swiss precision with deep local cultural understanding."
                delay={0.3}
            />
            <FeatureItem 
                icon={Globe}
                title="Pan-African Network"
                desc="From Addis Ababa to Angola, our vetted network of handlers ensures a consistent VIP experience everywhere."
                delay={0.4}
            />
        </div>
      </div>
    </section>
  );
}