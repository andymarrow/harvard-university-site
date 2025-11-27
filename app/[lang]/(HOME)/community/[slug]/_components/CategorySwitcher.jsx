"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Palette, GraduationCap, Mic, Handshake } from "lucide-react";

const links = [
  { slug: "arts", label: "Arts & Culture", icon: Palette },
  { slug: "youth", label: "Youth Programs", icon: GraduationCap },
  { slug: "lectures", label: "Lectures", icon: Mic },
  { slug: "partners", label: "Partnerships", icon: Handshake },
];

export default function CategorySwitcher() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-8 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-2 rounded-full shadow-2xl flex gap-1 overflow-x-auto max-w-full">
        {links.map((link) => {
          const isActive = pathname.includes(link.slug);
          return (
            <Link 
              key={link.slug} 
              href={`/community/${link.slug}`}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap
                ${isActive 
                  ? "bg-harvard-crimson text-white shadow-md" 
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }
              `}
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}