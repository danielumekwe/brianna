import Link from "next/link";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-bold uppercase tracking-normal transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2",
        variant === "primary" && "bg-brand-green text-white hover:bg-[#17a010]",
        variant === "dark" && "bg-brand-dark text-white hover:bg-black",
        variant === "light" && "bg-white text-brand-dark hover:bg-brand-surface",
        className,
      )}
    >
      {children}
    </Link>
  );
}
