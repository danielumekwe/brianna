import Image from "next/image";
import { ButtonLink } from "./button-link";

type CtaBandProps = {
  heading: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
};

export function CtaBand({
  heading,
  body,
  buttonText = "Contact Us",
  buttonHref = "/contact-us",
  image = "/uploads/2024/01/panoramic-shot-oil-rigs-sea-with-beautiful-sunset.jpg",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden py-16 text-center text-white">
      <Image src={image} alt="" fill sizes="100vw" quality={55} className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-4xl px-4">
        <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl">{heading}</h2>
        {body ? <p className="mt-3 text-lg text-white/90">{body}</p> : null}
        <ButtonLink href={buttonHref} className="mt-8">
          {buttonText}
        </ButtonLink>
      </div>
    </section>
  );
}
