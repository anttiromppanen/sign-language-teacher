import type { Metadata } from "next";
import { Oxanium, Source_Sans_3 } from "next/font/google";
import Appbar from "@/components/Appbar/page";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const source_sans = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source_sans_3",
	display: "swap",
	preload: true,
});
const oxanium = Oxanium({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-oxanium",
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "aslakki - AI Sign Language Learning App | Learn ASL Online Free",
	description:
		"AI Sign Language App — Learn American Sign Language (ASL) online for free.",
	keywords: [
		"Sign Language",
		"Sign Language App",
		"Sign Language teacher",
		"Sign language alphabet",
		"American Sign Language",
		"ASL",
		"Learn ASL",
		"Free ASL",
		"ASL online",
		"ASL tutor",
		"ASL teacher",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${source_sans.variable} ${oxanium.variable}`}>
			<body
				className={`antialiased bg-background bg-radial-gradient min-h-screen -z-50`}
			>
				<Appbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
