import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mockero AI",
  description: "An AI-powered platform for preparing for mock interviews",
  keywords: [
    "ai interview",
    "ai interviewer",
    "interview with ai",
    "mock interview",
    "mockup interviews",
    "practice interview",
    "interview",
    "interview questions",
    "interview questions for practice"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
