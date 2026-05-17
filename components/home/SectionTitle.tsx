type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "center" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-[#A9B8D8] md:text-lg">{description}</p>
    </div>
  );
}
