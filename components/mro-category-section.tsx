import { Check } from "lucide-react";
import type { MroCategory } from "@/lib/data/mro-categories";

export function MroCategorySection({ category }: { category: MroCategory }) {
  return (
    <article id={category.id} className="scroll-mt-24 border border-brand-line bg-white p-6 md:p-8">
      <h2 className="font-heading text-xl font-bold uppercase text-brand-dark md:text-2xl">{category.title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {category.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-brand-muted">
            <Check className="mt-0.5 shrink-0 text-brand-green-ink" size={16} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      {category.note ? <p className="mt-5 text-sm italic text-brand-muted">{category.note}</p> : null}
    </article>
  );
}
