import Appbar from "@/components/Appbar/page";
import type { Metadata } from "next";
import { Alice, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});
const alice = Alice({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-alice",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sign Language Teacher",
  description: "Learn the alphabet in American Sign Language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${alice.variable}`}>
      <body className={`antialiased`}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
