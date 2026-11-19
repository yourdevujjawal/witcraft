export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="flex items-center gap-3">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.65fr] md:items-end">
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-editorial sm:text-5xl lg:text-6xl">{title}</h2>
        {description && <p className="max-w-md text-sm leading-7 text-muted md:justify-self-end">{description}</p>}
      </div>
    </div>
  );
}
