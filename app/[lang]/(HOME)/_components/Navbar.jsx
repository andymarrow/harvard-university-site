"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  GraduationCap, 
  Menu, 
  X, 
  ArrowRight, 
  Search, 
  MapPin, 
  BookOpen, 
  FlaskConical, 
  Newspaper 
} from "lucide-react"; 
import ThemeToggle from "@/components/Themetoggle";


// --- DATA STRUCTURE (UPDATED WITH REAL LINKS) ---
const NAV_DATA = [
  {
    label: "Academics",
    href: "/academics", // Linked to Academics Page
    icon: BookOpen,
    columns: [
      {
        title: "Degree Programs",
        links: [
          { label: "Undergraduate Degrees", href: "/academics" }, // Directs to explorer
          { label: "Graduate Degrees", href: "/academics" },
          { label: "Professional Learning", href: "/academics" },
        ]
      },
      {
        title: "Schools & Units",
        links: [
          { label: "Harvard Business School", href: "/academics" },
          { label: "Harvard Medical School", href: "/academics" },
          { label: "School of Engineering", href: "/academics" },
        ]
      }
    ],
    visual: {
      title: "Harvard Online",
      desc: "Learning can happen for every type of learner, anywhere.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      link: "Explore Online Courses"
    }
  },
  {
    label: "Campus",
    href: "/campus", // Linked to Campus Hub
    icon: MapPin,
    columns: [
      {
        title: "Visit",
        links: [
          { label: "Tours & Information", href: "/campus/visit" }, // Linked
          { label: "Maps & Directions", href: "/campus/visit" }, // Linked (Map is on Visit page)
          { label: "Events Calendar", href: "/campus/visit" },
        ]
      },
      {
        title: "Culture",
        links: [
          { label: "Museums", href: "/campus/museums" }, // Linked
          { label: "Arnold Arboretum", href: "/campus/arboretum" }, // Linked
          { label: "Athletics", href: "/campus/athletics" }, // Linked
        ]
      }
    ],
    visual: {
      title: "Explore Museums",
      desc: "Get tickets to our next game, hours for libraries, and museum info.",
      image: "https://images.unsplash.com/photo-1731124585806-d4edb1390143?w=500&auto=format&fit=crop",
      link: "Plan Your Visit" // Visual card also links to visit
    }
  },
  {
    label: "In Focus",
    href: "/research",
    icon: FlaskConical,
    columns: [
      {
        title: "Trending Topics",
        links: [
          { label: "Public Service", href: "/research" },
          { label: "Diabetes Research", href: "/research" },
          { label: "Genetics", href: "/research" },
        ]
      },
      {
        title: "Initiatives",
        links: [
          { label: "Climate Change", href: "/research" },
          { label: "Artificial Intelligence", href: "/research" },
          { label: "Democracy", href: "/research" },
        ]
      }
    ],
    visual: {
      title: "Genetics",
      desc: "Harvard researchers are working to understand how tiny instructions exert large influence.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000&auto=format&fit=crop",
      link: "Decode the Mysteries"
    }
  },
  {
    label: "News",
    href: "/news", // Linked to News Archive
    icon: Newspaper,
    columns: [
      {
        title: "The Gazette",
        links: [
          { label: "Science & Health", href: "/news" },
          { label: "National & World Affairs", href: "/news" },
          { label: "Campus Life", href: "/news" },
        ]
      },
      {
        title: "Stay Connected",
        links: [
          { label: "Daily Gazette Signup", href: "/news" },
          { label: "Media Relations", href: "/news" },
        ]
      }
    ],
    visual: {
      title: "Mediterranean Diet",
      desc: "Experts break down the universal appeal and backed benefits of this health trend.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
      link: "Read the Story"
    }
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300
          ${isMobileMenuOpen 
            ? "py-0 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800" // Solid Block when open
            : scrolled ? "py-2" : "py-6" // Floating when closed
          }
        `}
      >
        <div 
          className={`
            relative flex items-center justify-between transition-all duration-300 ease-out
            ${isMobileMenuOpen 
              ? "w-full px-6 py-4 border-none shadow-none" 
              : scrolled
                ? "w-[98%] md:w-[90%] max-w-7xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2"
                : "w-full max-w-7xl bg-transparent px-4 py-2"
            }
          `}
        >
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-2 group pl-1" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-harvard-crimson text-white p-1.5 rounded-full group-hover:scale-105 transition-transform shadow-md">
                <GraduationCap size={20} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-harvard-crimson dark:text-white transition-colors">
                HARVARD
            </span>
          </Link>

          {/* 2. DESKTOP NAV (THE PILL) */}
          <div className={`hidden lg:flex items-center rounded-full p-1 border backdrop-blur-md shadow-sm transition-all
             ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
             bg-white/50 dark:bg-slate-900/50 border-white/20 dark:border-slate-800/50`
          }>
            {NAV_DATA.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <Link 
                  href={item.href}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300
                    ${hoveredNav === index 
                      ? "bg-white dark:bg-slate-800 text-harvard-crimson dark:text-harvard-electric shadow-sm" 
                      : "text-slate-600 dark:text-slate-300 hover:text-harvard-crimson dark:hover:text-white"
                    }
                  `}
                >
                  {item.label}
                  <ChevronDown 
                    size={12} 
                    className={`transition-transform duration-300 ${hoveredNav === index ? "rotate-180" : ""}`} 
                  />
                </Link>

                {/* MEGA MENU DROPDOWN */}
                <AnimatePresence>
                  {hoveredNav === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 pt-6 w-[850px]"
                    >
                      <div className="bg-white dark:bg-slate-950 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-harvard-crimson to-harvard-electric" />
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-7 grid grid-cols-2 gap-8 border-r border-slate-100 dark:border-slate-800 pr-6">
                            {item.columns.map((col, i) => (
                              <div key={i}>
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">{col.title}</h4>
                                <ul className="space-y-3">
                                  {col.links.map((link, j) => (
                                    <li key={j}>
                                      <Link href={link.href} className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-harvard-crimson dark:hover:text-harvard-electric hover:translate-x-1 transition-all duration-200">
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <div className="col-span-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <Link href={item.href} className="text-sm font-bold text-harvard-crimson dark:text-harvard-electric flex items-center gap-2 hover:gap-3 transition-all">
                                    View all {item.label} <ArrowRight size={14} />
                                </Link>
                            </div>
                          </div>
                          <div className="col-span-5 flex flex-col h-full">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Featured in {item.label}</h4>
                            <div className="relative flex-1 rounded-xl overflow-hidden group cursor-pointer bg-slate-100 dark:bg-slate-900">
                                {/* Only link the Visual Card if it's the Campus section */}
                                {item.label === "Campus" ? (
                                    <Link href="/campus/visit" className="absolute inset-0 z-20" />
                                ) : null}
                                <Image src={item.visual.image} alt={item.visual.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end">
                                    <h5 className="text-white font-serif text-xl mb-1">{item.visual.title}</h5>
                                    <p className="text-white/80 text-xs line-clamp-2 mb-3 leading-relaxed">{item.visual.desc}</p>
                                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                                        {item.visual.link} <ArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 3. RIGHT ACTIONS */}
          <div className="flex items-center gap-2 md:gap-3 pr-1">
             <div className="hidden sm:block">
                <ThemeToggle />
             </div>
             <button className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Search size={20} />
             </button>
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
             >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>

        </div>
      </motion.nav>

      {/* --- MOBILE FULL SCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-white dark:bg-slate-950 pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2 pb-20">
                {NAV_DATA.map((item, index) => (
                    <div key={index} className="border-b border-slate-100 dark:border-slate-800">
                        <button 
                            onClick={() => setActiveMobileAccordion(activeMobileAccordion === index ? null : index)}
                            className="w-full flex items-center justify-between py-5 text-xl font-serif text-slate-900 dark:text-white"
                        >
                            <span className="flex items-center gap-3">
                                <item.icon size={20} className="text-harvard-crimson dark:text-harvard-electric" />
                                {item.label}
                            </span>
                            <ChevronDown 
                                size={20} 
                                className={`text-slate-400 transition-transform duration-300 ${activeMobileAccordion === index ? 'rotate-180' : ''}`} 
                            />
                        </button>
                        
                        <AnimatePresence>
                            {activeMobileAccordion === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-6 pl-2 space-y-6">
                                        {item.columns.map((col, i) => (
                                            <div key={i}>
                                                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{col.title}</h5>
                                                <ul className="space-y-3 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                                                    {col.links.map((link, j) => (
                                                        <li key={j}>
                                                            <Link 
                                                                href={link.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block text-slate-600 dark:text-slate-300 py-1"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="relative rounded-xl overflow-hidden aspect-video">
                                            {/* Mobile Visual Card Link */}
                                            {item.label === "Campus" && (
                                                <Link href="/campus/visit" onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 z-20" />
                                            )}
                                            <Image 
                                                src={item.visual.image} 
                                                alt={item.visual.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <span className="text-white font-bold border-b border-white pb-1">
                                                    {item.visual.link}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
                
                <div className="mt-8 flex items-center justify-center">
                    <ThemeToggle />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}