import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold uppercase text-brand-dark">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-brand-muted">The page you requested could not be found.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/">Back Home</ButtonLink>
      </div>
    </section>
  );
}
