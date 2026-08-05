// lib/projects.ts
export type Project = {
  name: string;
  badge: string;
  description: string;
  tags: string[];
  demo: string;
  repo: string;
  domain: string;
};

export const projects: Project[] = [
  {
    name: "Nipon Konstruksi — Company Profile + CMS",
    badge: "Klien nyata · sudah online",
    description:
      "Website company profile untuk perusahaan konstruksi, dilengkapi panel admin agar timnya bisa mengelola konten sendiri. Setiap perubahan dari dashboard langsung tampil di halaman depan.",
    tags: ["Next.js", "React", "Supabase", "PostgreSQL"],
    demo: "https://www.niponsaranakonstruksi.co.id",
    repo: "https://github.com/rzkylatiif",
    domain: "niponsaranakonstruksi.co.id",
  },
  {
    name: "Point of Sales Real-Time",
    badge: "Full-stack app",
    description:
      "Aplikasi kasir dengan stok dan transaksi yang diperbarui secara real-time. Kelola produk, catat penjualan, dan pantau laporan dalam satu tempat.",
    tags: ["Next.js", "React", "Supabase", "PostgreSQL"],
    demo: "https://poscafe-nine.vercel.app",
    repo: "https://github.com/rzkylatiif",
    domain: "poscafe-nine.vercel.app",
  },
];
