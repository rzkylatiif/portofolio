import { GlassCard } from "@/components/shared/glass-card";
import { projects } from "@/lib/projects";
import Image from "next/image";

export function Projects() {
  return (
    <section id="project" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="mb-11">
        <p className="font-mono-app text-[0.72rem] uppercase tracking-[0.22em] text-[var(--mist)]">
          03 — Project
        </p>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Project
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <GlassCard key={p.name} className="p-6 md:p-8">
            <div className="grid gap-7 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#7c5cff]/25 to-[#22d3ee]/20 font-mono-app text-xs text-white/50">
                    {p.domain}
                  </div>
                )}
              </div>

              <div>
                <span className="font-mono-app text-[0.68rem] uppercase tracking-[0.15em] text-[#a9a0ff]">
                  {p.badge}
                </span>
                <h3 className="mb-2.5 mt-3 text-[1.5rem] font-semibold tracking-[-0.01em]">
                  {p.name}
                </h3>
                <p className="text-[0.98rem] leading-relaxed text-[var(--mist)]">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-[5px] font-mono-app text-[0.72rem] text-[#c7c7cf]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] text-[var(--snow)] opacity-80 transition-opacity hover:opacity-100"
                  >
                    ↗ Live demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] text-[var(--snow)] opacity-80 transition-opacity hover:opacity-100"
                  >
                    ↗ Source
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}

        <GlassCard className="p-8">
          <span className="font-mono-app text-[0.68rem] uppercase tracking-[0.15em] text-[#a9a0ff]">
            Personal
          </span>
          <h3 className="mb-2.5 mt-3 text-[1.5rem] font-semibold tracking-[-0.01em]">
            Portofolio ini
          </h3>
          <p className="max-w-2xl text-[0.98rem] leading-relaxed text-[var(--mist)]">
            Situs yang sedang kamu buka. Terinspirasi tampilan &quot;liquid
            glass&quot; dari Apple, dibuat ringan dan bersih.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "Tailwind v4", "shadcn/ui"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-[5px] font-mono-app text-[0.72rem] text-[#c7c7cf]"
              >
                {t}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
