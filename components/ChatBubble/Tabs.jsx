"use client";
import React from "react";

function Tabs({ activeTab, onTabChange, tabs }) {
	return (
		<div className="flex border-b border-gray-200 dark:border-white/5 bg-white dark:bg-neutral-900">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					className={`flex-1 text-center py-4 px-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none relative group
                        ${
							activeTab === tab.id
								? "text-krimson dark:text-white"
								: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
						}`}
					onClick={() => onTabChange(tab.id)}
				>
					{tab.name}
                    {/* Animated Gold underline */}
                    <span className={`absolute bottom-0 left-0 w-full h-[3px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200
                        ${activeTab === tab.id ? 'scale-x-100 bg-amber-500' : 'bg-gray-200'}`}
                    ></span>
				</button>
			))}
		</div>
	);
}

export default Tabs;