import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  accent?: "blue" | "cyan" | "amber";
};

const accentClasses = {
  blue: "border-blue-300/30 shadow-[0_0_24px_rgba(30,123,255,0.18),inset_0_0_24px_rgba(30,123,255,0.08)]",
  cyan: "border-cyan-200/35 shadow-[0_0_24px_rgba(0,213,255,0.18),inset_0_0_24px_rgba(0,213,255,0.08)]",
  amber: "border-amber-300/35 shadow-[0_0_24px_rgba(255,159,28,0.14),inset_0_0_24px_rgba(255,159,28,0.07)]"
};

export function GlowCard({ children, className, accent = "blue" }: GlowCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[20px] border bg-[rgba(12,30,68,0.72)] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70",
        accentClasses[accent],
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-cyan-200/70 opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-28 border-b border-r border-cyan-200/20" />
      {children}
    </div>
  );
}
