import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google"; // Import Outfit dari Google Fonts
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Konfigurasi font Outfit (Bulat & Modern)
const outfit = Outfit({
  variable: "--font-outfit", // Ini harus sama dengan yang ada di globals.css
  subsets: ["latin"],
  display: "swap",
});

// Font Mono tetap menggunakan Geist untuk bagian kode/teknis
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rizky Saputra Latief | Portfolio",
  description: "UI/UX Designer & Full-stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Kita masukkan variabel font di sini agar bisa diakses oleh Tailwind
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
