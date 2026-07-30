interface SectionHeadingProps {
  align?: "left" | "center";
  description?: string;
  eyebrow: string;
  id?: string;
  title: string;
}

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </header>
  );
}
