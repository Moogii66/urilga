import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  // variable: "--font-lobster", // Энэ фонтууд variable үүсгэх боломжгүй
});

export const metadata: Metadata = {
  title: "Урилга",
  description: "Энд дарж үзээрэй",
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
        style={{ fontFamily: lobster.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}
