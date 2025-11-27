// app/layout.js
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes"; 
import ProgressBar from "@/components/ProgressBar"; // <--- Import your new wrapper
import ChatBubble from "@/components/ChatBubble/page";
import Navbar from "./[lang]/(HOME)/_components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Harvard University | Where Curiosity Meets Consequence",
  description: "The official digitally reimagined home of Harvard University.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body className={`${inter.variable} ${playfair.variable} ${inter.className} bg-harvard-accent text-slate-900 antialiased`}>
                {/* Use the wrapper here */}
				<ProgressBar />

				<Toaster />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Navbar />
					{children}
                    
                    {/* <ChatBubble /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}