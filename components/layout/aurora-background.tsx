export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[6vw] -top-[8vw] h-[46vw] w-[46vw] animate-drift rounded-full bg-[#7c5cff] opacity-55 blur-[90px]" />
      <div className="absolute right-[-8vw] top-[30vh] h-[40vw] w-[40vw] animate-drift-slow rounded-full bg-[#3b82f6] opacity-55 blur-[90px]" />
      <div className="absolute bottom-[-10vw] left-[20vw] h-[38vw] w-[38vw] animate-drift rounded-full bg-[#22d3ee] opacity-40 blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,#060608_100%)]" />
    </div>
  );
}
