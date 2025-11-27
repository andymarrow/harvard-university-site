"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plane, HeartPulse, Wrench, Briefcase, Map, Star, Menu, X } from "lucide-react"; 
import ThemeToggle from "@/components/Themetoggle";

// Define the services data for the dropdown
const servicesList = [
  { 
    title: "Flight Support", 
    href: "/services/flight-support", 
    desc: "Permits & Handling",
    icon: Map 
  },
  { 
    title: "Charter & Leasing", 
    href: "/services/charter", 
    desc: "Private & Commercial",
    icon: Plane 
  },
  { 
    title: "Luxury Koncierge", 
    href: "/services/koncierge", 
    desc: "VIP Travel & Hotels",
    icon: Star 
  },
  { 
    title: "Aeromedical", 
    href: "/services/aeromedical", 
    desc: "24/7 Evacuation",
    icon: HeartPulse 
  },
  { 
    title: "MRO Solutions", 
    href: "/services/mro", 
    desc: "Maintenance Support",
    icon: Wrench 
  },
  { 
    title: "Consulting", 
    href: "/services/consulting", 
    desc: "Aviation Strategy",
    icon: Briefcase 
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(false);
  
  // Mobile State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMobileMenuOpen
          ? "py-3 bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative w-12 h-12 md:w-14 md:h-14">
             <Image 
               src="/images/logo.png" 
               alt="Krimson Aviation" 
               fill 
               className="object-contain"
             />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            Krimson<span className="text-krimson dark:text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-white/5 px-2 py-1.5 rounded-full border border-white/20 dark:border-white/10 backdrop-blur-md shadow-sm transition-colors relative">
            
            <Link href="/about" className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-krimson dark:hover:text-amber-400 transition-all">
              About
            </Link>

            {/* --- Desktop Dropdown --- */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredService(true)}
              onMouseLeave={() => setHoveredService(false)}
            >
              <button 
                className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all ${
                  hoveredService 
                    ? "bg-white dark:bg-white/10 text-krimson dark:text-amber-500" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-krimson dark:hover:text-amber-400"
                }`}
              >
                Services
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${hoveredService ? "rotate-180" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {hoveredService && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] p-4 bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden"
                  >
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    <div className="grid grid-cols-2 gap-2">
                      {servicesList.map((service) => (
                        <Link 
                          key={service.title} 
                          href={service.href}
                          className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-krimson group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-black transition-all duration-300">
                            <service.icon size={18} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-krimson dark:group-hover:text-amber-500 transition-colors">
                              {service.title}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-center">
                      <Link href="/services" className="text-xs font-semibold text-gray-400 hover:text-krimson dark:hover:text-amber-500 uppercase tracking-widest transition-colors">
                        View All Capabilities →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/Blog" className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-krimson dark:hover:text-amber-400 transition-all">
              Insights
            </Link>
            <Link href="/contact" className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-krimson dark:hover:text-amber-400 transition-all">
              Contact
            </Link>
        </nav>

        {/* Actions (Toggle + CTA + Hamburger) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <Link href="/quote" className="hidden md:block bg-gray-900 hover:bg-krimson dark:bg-white dark:text-black dark:hover:bg-amber-400 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-krimson/20">
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>
    </header>

    {/* --- Mobile Menu Overlay --- */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 dark:text-white hover:text-krimson dark:hover:text-amber-500"
            >
                About
            </Link>

            {/* Mobile Services Accordion */}
            <div>
                <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-900 dark:text-white hover:text-krimson dark:hover:text-amber-500"
                >
                    Services
                    <ChevronDown size={20} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                    {isMobileServicesOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 border-l-2 border-gray-100 dark:border-white/10"
                        >
                            {servicesList.map((service) => (
                                <Link 
                                    key={service.title}
                                    href={service.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    <service.icon size={16} className="text-krimson dark:text-amber-500" />
                                    {service.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Link 
                href="/Blog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 dark:text-white hover:text-krimson dark:hover:text-amber-500"
            >
                Insights
            </Link>
            <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 dark:text-white hover:text-krimson dark:hover:text-amber-500"
            >
                Contact
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto pb-10">
             <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-krimson text-white py-4 rounded-full font-bold text-center shadow-lg">
                Request a Quote
             </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}