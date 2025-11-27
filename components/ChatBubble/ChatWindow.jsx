"use client";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Tabs from "./Tabs";
import ChatInterface from "./ChatInterface";
import FAQSection from "./FAQSection";
import { motion, AnimatePresence } from "framer-motion";

function ChatWindow({ activeTab, onTabChange, onClose }) {
	const tabs = [
		{ id: "ops", name: "Live Ops" },
		{ id: "charter", name: "Charter" },
		{ id: "faq", name: "Help" }, 
	];

	return (
		<div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 font-sans">
			{/* Header */}
			<div className="flex items-center justify-between p-5 bg-krimson text-white"> 
				<div>
                    <h3 className="text-lg font-bold">
                        Krimson<span className="text-amber-400">.</span> Support
                    </h3>
                    <p className="text-xs text-red-100 opacity-80 uppercase tracking-widest">24/7 Response Team</p>
                </div>
				<button
					onClick={onClose}
					className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 p-2 rounded-full"
					aria-label="Close chat window"
				>
					<IoCloseOutline className="h-6 w-6" />
				</button>
			</div>

			{/* Tabs */}
			<Tabs activeTab={activeTab} onTabChange={onTabChange} tabs={tabs} />

			{/* Content Area */}
			<div className="flex-grow overflow-hidden relative bg-gray-50 dark:bg-black/20"> 
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col"
                    >
                        {activeTab === "ops" && (
                            <ChatInterface tabName="Ops Center" placeholder="Enter permit number or airport code..." />
                        )}
                        {activeTab === "charter" && (
                             <ChatInterface tabName="Charter Desk" placeholder="Departure, Destination, Pax count..." />
                        )}
                        {activeTab === "faq" && <FAQSection />}
                    </motion.div>
                </AnimatePresence>
			</div>
		</div>
	);
}

export default ChatWindow;