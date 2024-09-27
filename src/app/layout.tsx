import type { Metadata } from "next";
import { Playfair_Display, Alice } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar/page";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const alice = Alice({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-alice",
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
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${alice.variable} antialiased`}
      >
        <Appbar />
        {children}
      </body>
    </html>
  );
}
