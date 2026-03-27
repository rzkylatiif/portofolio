"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle"; // Memanggil tombol tema yang baru dibuat

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        {/* Logo - Nama Kamu */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter flex items-center gap-1 group"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
            R
          </div>
          <span className="hidden sm:inline-block">
            Rizky<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Menu Navigasi & Dark Mode Toggle */}
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
          </nav>

          <div className="h-4 w-[1px] bg-border mx-2 hidden sm:block" />

          {/* Wrapper untuk Tombol Mode & Kontak */}
          <div className="flex items-center gap-3">
            <ModeToggle /> {/* Tombol Pilihan Tema (Light/Dark/System) */}
            <a href="mailto:rizkysaputralatief1093@gmail.com">
              <Button
                variant="default"
                className="rounded-full px-5 h-9 text-xs font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Lets Talk
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
