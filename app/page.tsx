import { AuroraBackground } from "@/components/layout/aurora-background";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <span id="top" />
      <AuroraBackground />
      <Navbar />
      <Hero />

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="px-6 pb-14 pt-6 text-center font-mono-app text-[0.82rem] text-[var(--mist)]">
        © 2026 rzky.latif — Next.js
      </footer>
    </>
  );
}
