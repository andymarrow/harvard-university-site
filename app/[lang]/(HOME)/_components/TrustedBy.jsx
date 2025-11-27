"use client";

export default function TrustedBy() {
  // Increased the list slightly to ensure it fills wide screens before duplication
  const logos = [
    "Boeing", "Dassault", "Gulfstream", "Pilatus", "Bombardier", "Textron", "Embraer", "Cessna"
  ];

  return (
    <section className="py-10 border-y border-gray-100 dark:border-white/5 bg-white dark:bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Trusted By Global Leaders
        </p>
      </div>
      
      {/* The Seamless Marquee Container */}
      <div className="relative flex overflow-hidden group mask-linear-fade">
        
        {/* Gradient Masks to fade edges (Optional but looks premium) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent z-10"></div>

        {/* List 1 */}
        <div className="flex shrink-0 items-center gap-20 animate-infinite-scroll pr-20">
          {logos.map((logo, i) => (
            <span 
              key={`l1-${i}`} 
              className="text-3xl font-bold text-gray-300 dark:text-gray-700 hover:text-krimson dark:hover:text-white transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* List 2 (Duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center gap-20 animate-infinite-scroll pr-20" aria-hidden="true">
          {logos.map((logo, i) => (
            <span 
              key={`l2-${i}`} 
              className="text-3xl font-bold text-gray-300 dark:text-gray-700 hover:text-krimson dark:hover:text-white transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}