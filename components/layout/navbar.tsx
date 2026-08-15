// components/layout/navbar.tsx
"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "tentang", label: "Tentang" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Project" },
  { id: "kontak", label: "Kontak" },
];

export function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 [mask-image:linear-gradient(to_bottom,black,transparent)] backdrop-blur-md" />

      <nav className="glass fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full py-1.5 pl-2.5 pr-2">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 px-1 py-1 font-mono-app text-[0.82rem] font-medium transition-opacity hover:opacity-80"
        >
          <span className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-white to-[#9a9aa2] text-[0.62rem] font-bold text-[#0c0c0e] shadow-[0_2px_12px_rgba(255,255,255,0.15)]">
            RL
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-pulse rounded-full border-2 border-[#060608] bg-[#30d158]" />
          </span>
          rzky.latif
        </a>

        <span className="mx-0.5 hidden h-[18px] w-px bg-white/15 sm:block" />

        <div className="hidden items-center gap-1 sm:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3.5 py-[7px] text-[0.85rem] transition-colors ${
                active === id
                  ? "bg-white/[0.12] text-[var(--snow)]"
                  : "text-[var(--mist)] hover:bg-white/[0.08] hover:text-[var(--snow)]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
