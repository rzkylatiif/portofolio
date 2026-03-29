import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Sparkles,
  Mail,
  Download,
  ChevronRight,
  Globe,
  Palette,
  Briefcase,
  ExternalLink,
  Key,
} from "lucide-react";

export default function Home() {
  const skills = [
    "Front-End Development",
    "UI/UX Design",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Figma",
    "Tailwind CSS",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Dekorasi Background Glow */}
        <div className="absolute top-0 -left-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse" />

        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 md:px-6 md:py-1.5 border-primary/20 bg-primary/5 backdrop-blur-md text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold animate-in fade-in slide-in-from-bottom-3 duration-1000"
            >
              <Sparkles className="w-3 h-3 mr-2 text-primary fill-primary" />{" "}
              Available for Hire
            </Badge>

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl md:text-[140px] font-black tracking-tighter leading-[0.85] md:leading-[0.75] animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
                  Craftsman.
                </span>
              </h1>
            </div>

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed px-4 md:px-0 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Halo, saya{" "}
              <span className="text-foreground font-semibold">
                Rizky Saputra Latief
              </span>
              . Seorang{" "}
              <span className="text-foreground font-semibold text-primary">
                Front-End Enthusiast
              </span>{" "}
              yang menjembatani estetika desain dengan presisi kode.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto px-10 sm:px-0 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full rounded-full px-8 h-12 md:h-14 font-bold shadow-xl shadow-primary/20 hover:scale-[1.05] transition-all"
                >
                  Lihat Proyek <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/cv-rizky.pdf" download className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full px-8 h-12 md:h-14 border-border/60 backdrop-blur-sm font-bold gap-2 hover:bg-muted"
                >
                  <Download className="w-4 h-4" /> CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK EXPERIENCE SECTION --- */}
      <section className="py-20 border-t border-border/40 bg-muted/5">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Career Path
              </h2>
              <p className="text-2xl font-bold">Work Experience</p>
            </div>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative border-l border-primary/20 ml-6 pl-8 space-y-16">
            
            {/* EXPERIENCE 1: COMENTOR */}
            <div className="relative">
              {/* Dot Timeline */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-sm" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold italic">UI/UX Designer & Product Management Intern</h3>
                    <p className="text-primary font-medium">Comentor</p>
                  </div>
                  <Badge variant="secondary" className="w-fit text-[10px] font-bold">
                    Jun 2025 - Sep 2025
                  </Badge>
                </div>
                {/* Deskripsi dibiarkan draft sesuai permintaan */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl italic">
                  (Deskripsi pengalaman kerja di Comentor belum final)
                </p>
              </div>
            </div>

            {/* EXPERIENCE 2: REAL-TIME POS SYSTEM */}
            <div className="relative">
              {/* Dot Timeline */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-muted-foreground/30 shadow-sm" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Fullstack Developer (Project-Based)</h3>
                    <p className="text-primary font-medium">Real-time POS System</p>
                  </div>
                  <Badge variant="outline" className="w-fit text-[10px] font-bold border-primary/30">
                    2025 - Present
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  Membangun sistem kasir terintegrasi yang menangani manajemen inventaris, 
                  laporan penjualan harian, dan sistem pembayaran digital untuk efisiensi operasional bisnis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-muted text-muted-foreground border-none text-[9px]">NEXT.JS</Badge>
                  <Badge className="bg-muted text-muted-foreground border-none text-[9px]">SUPABASE</Badge>
                  <Badge className="bg-muted text-muted-foreground border-none text-[9px]">MIDTRANS</Badge>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS (ID: projects) --- */}
      <section
        id="projects"
        className="py-20 md:py-32 border-t border-border/40 relative"
      >
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-4 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Selected Works
              </h2>
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Eksplorasi Terbaru
              </p>
            </div>
            <p className="hidden md:block text-muted-foreground text-sm max-w-[300px]">
              Fokus pada fungsionalitas sistem dan kebersihan antarmuka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* PROJECT 1: POS APPS */}
            <div className="group relative rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-gradient-to-br from-muted/20 to-transparent p-px transition-all duration-500 hover:border-primary/30 shadow-lg">
              <div className="bg-background/50 rounded-[1.4rem] md:rounded-[1.9rem] p-6 md:p-10 h-full flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-primary/10 text-primary border-none text-[9px] md:text-[10px] uppercase font-black tracking-widest px-3 py-1">
                      Fullstack Development
                    </Badge>
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground/20 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-bold tracking-tighter">
                      Real-time POS Apps
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Sistem kasir cerdas dengan manajemen inventaris otomatis
                      dan integrasi payment gateway Midtrans.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Supabase", "Midtrans"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-muted/50 border border-border/40 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 md:pt-12">
                  <div className="flex flex-wrap gap-6 mb-6">
                    {/* Tautan Live Demo*/}
                    <a
                      href="https://poscafe-nine.vercel.app/"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-primary group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    {/* Tautan GitHub */}
                    <a
                      href="https://github.com/rzkylatiif/pos-apps.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="p-1.5 rounded-full border border-border">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </div>
                      <span>Source Code</span>
                    </a>
                  </div>

                  {/* Kredensial Akun Test */}
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-2">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground flex items-center gap-2">
                      <Key className="w-3 h-3 text-primary" /> Akun Test Login
                    </p>
                    <div className="grid grid-cols-1 gap-1 text-[11px] font-mono">
                      <p>
                        <span className="text-muted-foreground">Email:</span>{" "}
                        <span className="text-foreground select-all cursor-pointer">
                          admin@gmail.com
                        </span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Pass :</span>{" "}
                        <span className="text-foreground select-all cursor-pointer">
                          test123
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 2: DAPUA (UI/UX) */}
            <div className="group relative rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-gradient-to-br from-muted/20 to-transparent p-px transition-all duration-500 hover:border-[#F24E1E]/30 shadow-lg">
              <div className="bg-background/50 rounded-[1.4rem] md:rounded-[1.9rem] p-6 md:p-10 h-full flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-[#F24E1E]/10 text-[#F24E1E] border-none text-[9px] md:text-[10px] uppercase font-black tracking-widest px-3 py-1">
                      UI/UX Design
                    </Badge>
                    <Palette className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground/20 group-hover:text-[#F24E1E] group-hover:-rotate-12 transition-all duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-bold tracking-tighter">
                      Dapua Design System
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Eksplorasi pengalaman pengguna yang mendalam untuk
                      operasional bisnis kuliner modern.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Design System", "Prototyping"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-muted/50 border border-border/40 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-8 md:pt-12">
                  <a
                    href="https://www.figma.com/design/v0kbEbm7ugT6JWHC08232I/Dapua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs md:text-sm font-bold group/btn text-[#F24E1E] transition-colors"
                  >
                    <div className="p-2 rounded-full border border-border group-hover/btn:border-[#F24E1E] transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 25.5c-3.3 0-6-2.7-6-6v-6c0-3.3 2.7-6 6-6s6 2.7 6 6v6c0 3.3-2.7 6-6 6zM12 1.5c-3.3 0-6 2.7-6 6v3c0 3.3 2.7 6 6 6s6-2.7 6-6v-3c0-3.3-2.7-6-6-6zM3 13.5c0-3.3 2.7-6 6-6h3v12H9c-3.3 0-6-2.7-6-6zM15 13.5c3.3 0 6-2.7 6-6s-2.7-6-6-6h-3v12h3zM15 25.5c3.3 0 6-2.7 6-6s-2.7-6-6-6h-3v12h3z" />
                      </svg>
                    </div>
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS TICKER --- */}
      <section className="py-12 md:py-24 border-t border-b border-border/40 overflow-hidden bg-muted/5 relative">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-full overflow-hidden">
          <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap py-4 items-center">
            {skills.concat(skills).map((skill, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-8">
                <span className="text-3xl md:text-5xl font-black tracking-[0.1em] uppercase italic opacity-10 hover:opacity-100 hover:text-primary transition-all duration-700 cursor-default">
                  {skill}
                </span>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-primary/20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 md:py-32 text-center bg-gradient-to-b from-transparent to-muted/10 px-6">
        <div className="container mx-auto max-w-2xl space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground">
              Ready to <span className="text-primary italic">connect?</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Saya sedang mencari peluang untuk berkontribusi di tim yang
              visioner.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-10">
            <a
              href="mailto:rizkysaputralatief1093@gmail.com"
              className="text-lg md:text-2xl font-bold hover:text-primary transition-all break-all border-b border-border hover:border-primary pb-1"
            >
              rizkysaputralatief1093@gmail.com
            </a>

            <div className="flex gap-4 md:gap-6">
              <a
                href="https://github.com/rzkylatiif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border/60 rounded-full hover:bg-foreground hover:text-background hover:-translate-y-2 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 md:w-6 md:h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rzkylatif/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border/60 rounded-full hover:bg-[#0A66C2] hover:text-white hover:-translate-y-2 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 md:w-6 md:h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:rizkysaputralatief1093@gmail.com"
                className="p-4 border border-border/60 rounded-full hover:bg-primary hover:text-primary-foreground hover:-translate-y-2 transition-all duration-300"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <p className="text-[9px] md:text-[12px] font-bold text-muted-foreground pt-12 md:pt-20">
            © 2026 Rizky Saputra Latief <br /> Built with Passion & Precision
          </p>
        </div>
      </footer>
    </main>
  );
}
