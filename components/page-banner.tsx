import Image from "next/image";

type PageBannerProps = {
  title: string;
  image?: string;
};

export function PageBanner({ title, image = "/uploads/2023/10/EDITED-8-1920x600.png" }: PageBannerProps) {
  return (
    <section className="relative min-h-64 overflow-hidden bg-brand-dark text-white">
      <Image src={image} alt="" fill sizes="100vw" quality={45} className="object-cover" priority fetchPriority="high" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex min-h-64 max-w-7xl items-center px-4 py-16">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
