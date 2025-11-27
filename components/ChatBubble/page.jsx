"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBubbleIcon from "./ChatBubbleIcon";
import ChatWindow from "./ChatWindow";

function ChatBubble() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("ops"); 

	const toggleChat = () => {
		setIsChatOpen(!isChatOpen);
        if (!isChatOpen) setActiveTab("ops");
	};

    const windowVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95, pointerEvents: 'none' },
        visible: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' },
        exit: { opacity: 0, y: 20, scale: 0.95, pointerEvents: 'none', transition: { duration: 0.15 } }
    };

	return (
		<>
			{!isChatOpen && <ChatBubbleIcon onClick={toggleChat} />}

			<AnimatePresence>
				{isChatOpen && (
					<motion.div
						className="fixed bottom-8 right-4 sm:right-8 w-[90vw] sm:w-[380px] h-[600px] z-[70] origin-bottom-right"
						variants={windowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						<ChatWindow
							activeTab={activeTab}
							onTabChange={setActiveTab}
							onClose={toggleChat}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default ChatBubble;