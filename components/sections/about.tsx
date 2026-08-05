import { GlassCard } from "@/components/shared/glass-card";

const stats = [
  { k: "Status", v: "Open to work" },
  { k: "Basis", v: "Tangerang Selatan, Indonesia" },
  { k: "Andalan", v: "React · Next.js · Supabase" },
];

export function About() {
  return (
    <section id="tentang" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="mb-11">
        <p className="font-mono-app text-[0.72rem] uppercase tracking-[0.22em] text-[var(--mist)]">
          01 — Tentang
        </p>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Dari tampilan sampai datanya
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-9">
          <p className="text-[1.05rem] leading-relaxed text-[#c7c7cf]">
            Saya lulusan Teknik Informatika yang tertarik dengan tampilan web
            yang bersih dan profesional. Menurut saya, website yang baik itu
            sederhana: enak dilihat dan nyaman digunakan.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[#c7c7cf]">
            Saya senang membangun website yang modern dan tertata rapi, dengan
            kode yang mudah dikembangkan. Bisa mengerjakan frontend maupun
            fullstack.
          </p>
        </GlassCard>

        <div className="flex flex-col gap-5">
          {stats.map(({ k, v }) => (
            <GlassCard
              key={k}
              className="flex flex-1 flex-col justify-center p-6"
            >
              <span className="font-mono-app text-[0.7rem] uppercase tracking-[0.15em] text-[var(--mist)]">
                {k}
              </span>
              <span className="mt-2 text-[1.25rem] font-medium">{v}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
