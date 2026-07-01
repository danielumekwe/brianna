type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-brand-dark md:text-4xl">
        {eyebrow ? <span className="text-brand-green-ink">{eyebrow} </span> : null}
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-brand-muted">{text}</p> : null}
    </div>
  );
}
