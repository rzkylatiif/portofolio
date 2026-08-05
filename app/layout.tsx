import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rizky Saputra Latief — Frontend & Fullstack Developer",
  description:
    "Portofolio Rizky Saputra Latief. Membuat website yang bersih, modern, dan profesional dengan React, Next.js, dan Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={cn("dark", inter.variable, mono.variable)}>
      <body>{children}</body>
    </html>
  );
}
