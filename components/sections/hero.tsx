export function Hero() {
  return (
    <header className="relative flex min-h-dvh flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
      <p className="font-mono-app text-[0.72rem] uppercase tracking-[0.22em] text-[var(--mist)]">
        Junior Frontend &amp; Fullstack Developer · Tangerang Selatan
      </p>

      <h1 className="mt-6 bg-gradient-to-b from-white to-[#b8b8c0] bg-clip-text text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-transparent">
        Rizky Saputra
        <br />
        Latief
      </h1>

      <p className="mt-7 max-w-[620px] text-[clamp(1.05rem,2.2vw,1.3rem)] leading-relaxed text-[#c7c7cf]">
        Saya membuat website yang bersih, modern, dan terlihat profesional,
        dengan fokus pada tampilan yang rapi dan nyaman digunakan.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#project"
          className="rounded-full bg-[var(--snow)] px-6 py-3 text-[0.95rem] font-medium text-[var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          Lihat proyek →
        </a>
        <a
          href="/cv.pdf"
          className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-[0.95rem] font-medium text-[var(--snow)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/[0.12]"
        >
          Unduh CV ↓
        </a>
      </div>

      <p className="mt-16 font-mono-app text-[0.78rem] tracking-[0.1em] text-[var(--mist)]">
        scroll ↓
      </p>
    </header>
  );
}
