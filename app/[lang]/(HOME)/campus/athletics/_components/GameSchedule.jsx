"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";

export default function GameSchedule({ games }) {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white">Upcoming Games</h2>
        </div>

        <div className="space-y-6">
            {games.map((game, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-l-8 border-harvard-crimson"
                >
                    {/* Date Block */}
                    <div className="bg-slate-100 dark:bg-slate-900 p-6 flex flex-col justify-center items-center min-w-[150px] border-r border-slate-200 dark:border-slate-800">
                        <span className="text-harvard-crimson font-black text-3xl uppercase">{game.date.split(" ")[0]}</span>
                        <span className="text-slate-900 dark:text-white font-bold text-4xl">{game.date.split(" ")[1]}</span>
                        <span className="text-slate-500 text-sm mt-2">{game.time}</span>
                    </div>

                    {/* Info Block */}
                    <div className="p-6 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-harvard-crimson animate-pulse"/>
                            {game.sport}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Harvard <span className="text-slate-400 font-light">vs</span> {game.opponent}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                            <MapPin size={14} /> {game.location}
                        </div>
                    </div>

                    {/* Action Block */}
                    <div className="p-6 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                        <button className="px-6 py-3 rounded-full border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-sm uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
                            {game.ticketStatus === "Sold Out" ? "Waitlist" : "Get Tickets"}
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="text-harvard-crimson font-bold hover:underline">View Full Season Schedule</button>
        </div>
      </div>
    </section>
  );
}