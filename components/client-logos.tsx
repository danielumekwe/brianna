import Image from "next/image";
import { clientLogos } from "@/lib/data/home";

export function ClientLogos() {
  return (
    <ul className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
      {clientLogos.map((logo) => (
        <li key={logo.name} className="flex min-h-28 items-center justify-center border border-brand-line bg-white p-6">
          <Image src={logo.image} alt={logo.name} width={180} height={110} className="max-h-20 w-auto object-contain" />
        </li>
      ))}
    </ul>
  );
}
