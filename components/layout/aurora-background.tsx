// components/layout/aurora-background.tsx
export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0c0c0e]">
      {/* Cahaya abu hangat super lembut dari atas, bukan warna nyala */}
      <div className="absolute left-1/2 top-[-15vw] h-[50vw] w-[75vw] -translate-x-1/2 rounded-full bg-[#3a3a42] opacity-25 blur-[130px]" />
      {/* Grid tipis — detail yang bikin kesan 'disengaja' */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Vignette biar tengah lebih fokus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_40%,#0c0c0e_100%)]" />
    </div>
  );
}
