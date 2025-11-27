"use client";
import React, { useState } from "react";
import { IoSend, IoAttach } from "react-icons/io5";

function ChatInterface({ tabName, placeholder }) {
	const [message, setMessage] = useState("");

	// Aviation specific placeholders
	const placeholderMessages = [
		{ sender: 'system', text: `Connected to ${tabName}.` },
		{ sender: 'system', text: `How can we assist with your flight planning today?` },
	];

	return (
		<div className="flex flex-col h-full">
			{/* Message Display Area */}
			<div className="flex-grow overflow-y-auto p-4 space-y-4">
				{placeholderMessages.map((msg, index) => (
					 <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
						<div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm
                            ${msg.sender === 'user' 
                                ? 'bg-krimson text-white rounded-br-none' 
                                : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-bl-none'}`
                        }>
							{msg.text}
						</div>
					</div>
				))}
			</div>

			{/* Input Area */}
			<div className="p-4 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-white/5"> 
				<div className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-full px-2 py-2 border border-transparent focus-within:border-krimson/50 dark:focus-within:border-amber-500/50 transition-colors">
                    
                    <button className="p-2 text-gray-400 hover:text-krimson dark:hover:text-amber-500 transition-colors">
                        <IoAttach className="h-5 w-5" />
                    </button>

                    <input
                        type="text"
                        className="flex-grow bg-transparent text-gray-800 dark:text-white px-2 focus:outline-none text-sm placeholder-gray-400"
                        placeholder={placeholder || "Type message..."}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    <button
                        className={`p-2 rounded-full transition-all duration-200 ${
                            message.trim() 
                            ? "bg-krimson text-white shadow-md transform scale-100" 
                            : "bg-gray-200 dark:bg-white/10 text-gray-400 cursor-not-allowed transform scale-90"
                        }`}
                        disabled={!message.trim()}
                    >
                        <IoSend className="h-4 w-4" />
                    </button>
                </div>
			</div>
		</div>
	);
}

export default ChatInterface;