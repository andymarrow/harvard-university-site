"use client";
import { motion } from "framer-motion";
import { Target, Heart } from "lucide-react";

export default function TheManifesto() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="bg-white dark:bg-neutral-900 rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 dark:border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual/Stat Side */}
          <div className="relative h-full min-h-[300px] bg-krimson rounded-[2.5rem] p-10 flex flex-col justify-between text-white overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <Target size={40} className="text-amber-400 mb-8" />
              
              <div>
                  <h3 className="text-4xl font-bold mb-2">Excellence</h3>
                  <p className="text-red-100 opacity-90">
                      "We don't just execute flights; we orchestrate experiences. Every detail is a promise kept."
                  </p>
              </div>
          </div>

          {/* Text Side */}
          <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  More than a Service Provider.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  We are your partners in the sky. Krimson is committed to delivering customized solutions to the benefit of individuals, companies, and governments alike.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  Our success is built on the relationships we foster and nurture with our staff, clients, and industry partners. We are dedicated to understanding our clients' core needs and consistently meeting or exceeding their expectations.
              </p>

              <div className="flex items-center gap-3 text-krimson dark:text-amber-500 font-bold">
                  <Heart size={20} className="fill-current" />
                  <span>Dedication to Detail</span>
              </div>
          </div>

       </div>
    </section>
  );
}