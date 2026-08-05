import { skills } from "@/lib/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="mb-11">
        <p className="font-mono-app text-[0.72rem] uppercase tracking-[0.22em] text-[var(--mist)]">
          02 — Skills
        </p>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.02em]">
          Tools
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-7">
        {skills.map(({ name, sub, color, Icon }) => (
          <div
            key={name}
            className="flex w-[84px] flex-col items-center gap-2.5 text-center"
          >
            <div className="glass flex h-[74px] w-[74px] items-center justify-center rounded-[21px] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105">
              <Icon size={38} style={{ color }} />
            </div>
            <div>
              <p className="text-[0.8rem] font-medium text-[#c7c7cf]">{name}</p>
              <p className="font-mono-app text-[0.6rem] tracking-wide text-[var(--mist)]">
                {sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
