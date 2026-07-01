import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/${service.slug}`}
      aria-label={`Read more about ${service.title}`}
      className="group relative block aspect-[3/2] overflow-hidden rounded-xl border-[6px] border-white shadow-lg transition hover:border-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/55" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <p className="text-center font-heading text-lg font-bold uppercase leading-snug text-white">
          {service.title}
        </p>
      </div>
    </Link>
  );
}
