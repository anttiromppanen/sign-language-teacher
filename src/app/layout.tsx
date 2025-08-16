import type { Metadata } from "next";
import { Oxanium, Source_Sans_3 } from "next/font/google";
import Appbar from "@/components/Appbar/page";
import "./globals.css";

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
	title: "Sign Language Teacher - Signer",
	description: "Learn the alphabet in American Sign Language",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${source_sans.variable} ${oxanium.variable}`}>
			<body
				className={`antialiased bg-background bg-radial-gradient min-h-screen`}
			>
				<Appbar />
				{children}
			</body>
		</html>
	);
}
