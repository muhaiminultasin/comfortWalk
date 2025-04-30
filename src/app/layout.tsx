import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import HeroProviderWrapper from "./lib/utility/HeroProviderWrapper";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "comfortWalk",
  description: "ComfortWalk offers simple, stylish, and comfortable shoes for men and women. Made for everyday steps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <HeroProviderWrapper>{children}</HeroProviderWrapper>
      </body>
    </html>
  );
}
