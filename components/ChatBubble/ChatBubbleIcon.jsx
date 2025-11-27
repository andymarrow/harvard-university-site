"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function ChatBubbleIcon({ onClick }) {
	return (
		<motion.button
			className="fixed bottom-8 right-8 bg-krimson text-white p-4 rounded-full shadow-2xl hover:bg-red-900 transition-colors duration-300 z-[60] focus:outline-none ring-2 ring-white/20 dark:ring-black/20" 
			onClick={onClick}
			initial={{ opacity: 0, scale: 0 }} 
			animate={{ opacity: 1, scale: 1 }} 
			transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1 
            }}
			whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
			aria-label="Open flight support"
		>
            {/* Ping animation to show 'Live' status */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            
			<IoChatbubbleEllipsesOutline className="h-7 w-7" />
		</motion.button>
	);
}

export default ChatBubbleIcon;