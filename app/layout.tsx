import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AVXIRA GAMES - Next-Gen Gaming Studio",
  description: "Crafting immersive gaming experiences that push the boundaries of imagination. Welcome to the future of interactive entertainment.",
  keywords: "gaming, game development, AVXIRA, video games, interactive entertainment",
  authors: [{ name: "AVXIRA Games" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
    </html>
  );
}