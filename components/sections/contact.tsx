"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GlassCard } from "@/components/shared/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 huruf"),
  email: z.string().email("Format email belum benar"),
  pesan: z.string().min(10, "Pesan minimal 10 huruf"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormData) {
    const body = encodeURIComponent(
      `${data.pesan}\n\n— ${data.nama} (${data.email})`,
    );
    window.location.href = `mailto:rizkysaputralatief1093@gmail.com?subject=Halo dari portofolio&body=${body}`;
    reset();
  }

  return (
    <section id="kontak" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <GlassCard className="p-8 md:p-12">
        <p className="font-mono-app text-[0.72rem] uppercase tracking-[0.22em] text-[var(--mist)]">
          04 — Kontak
        </p>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-[-0.03em]">
          Mari ngobrol
        </h2>
        <p className="mt-4 max-w-md text-[var(--mist)]">
          Sedang terbuka untuk peluang kerja maupun proyek freelance. Silakan
          hubungi lewat form ini atau email langsung.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex flex-col gap-4"
        >
          <div>
            <Input placeholder="Nama" {...register("nama")} />
            {errors.nama && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.nama.message}
              </p>
            )}
          </div>

          <div>
            <Input placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea placeholder="Pesan" rows={5} {...register("pesan")} />
            {errors.pesan && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.pesan.message}
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[var(--snow)] px-6 text-[var(--ink)] hover:bg-white"
            >
              Kirim pesan
            </Button>
            <a
              href="https://github.com/rzkylatiif"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-2 text-sm font-medium text-[var(--snow)] transition-colors hover:bg-white/[0.12]"
            >
              GitHub
            </a>
          </div>
        </form>
      </GlassCard>
    </section>
  );
}
