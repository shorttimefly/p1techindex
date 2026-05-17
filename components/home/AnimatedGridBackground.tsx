export function AnimatedGridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050B1E]" />
      <div className="home-grid-drift absolute -inset-24 opacity-50 [background-image:linear-gradient(rgba(110,231,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,255,0.11)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/50" />
      <div className="absolute left-[8%] top-0 h-full w-px bg-cyan-300/10" />
      <div className="absolute right-[11%] top-0 h-full w-px bg-blue-400/10" />
      <div className="home-pulse-line absolute left-0 top-[38%] h-px w-full bg-cyan-300/25" />
      <div className="home-pulse-line absolute left-0 top-[72%] h-px w-full bg-blue-500/20 [animation-delay:1.2s]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,30,0.08)_0%,rgba(5,11,30,0.48)_56%,#050B1E_100%)]" />
    </div>
  );
}
