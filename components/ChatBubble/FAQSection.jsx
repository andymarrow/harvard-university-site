"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// Aviation Data
const faqData = [
    {
        question: "How fast can you secure a landing permit?",
        answer: "For most African countries, we can secure permits within 24-48 hours. Emergency medical flights can often be cleared in under 6 hours depending on the CAA."
    },
    {
        question: "Do you offer credit for fuel?",
        answer: "Yes. We offer fuel and handling on credit at over 3,000 locations globally with a single consolidated invoice."
    },
    {
        question: "How do I request an AOG technician?",
        answer: "Please use the 'Live Ops' tab or call our 24/7 hotline immediately. We will deploy our nearest certified engineer."
    },
    {
        question: "Which aircraft types do you support?",
        answer: "We handle everything from light turboprops (PC-12) to heavy commercial airliners (B777) and VVIP wide-bodies."
    },
];

function FAQItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-gray-100 dark:border-white/5 last:border-0">
			<button
				className="flex justify-between items-center w-full text-left py-4 px-4 focus:outline-none hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 rounded-lg my-1"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className={`text-sm font-bold transition-colors ${isOpen ? "text-krimson dark:text-amber-500" : "text-gray-700 dark:text-gray-300"}`}>
					{question}
				</span>
				{isOpen ? (
					<IoChevronUp className="flex-shrink-0 h-4 w-4 text-krimson dark:text-amber-500" /> 
				) : (
					<IoChevronDown className="flex-shrink-0 h-4 w-4 text-gray-400" /> 
				)}
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="overflow-hidden px-4"
					>
						<p className="pb-4 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                            {answer}
                        </p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function FAQSection() {
    return (
        <div className="flex-grow overflow-y-auto p-2 bg-white dark:bg-neutral-900">
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}

export default FAQSection;