import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "@/lib/data/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      aria-label={post.title}
      className="group relative block aspect-[4/3] overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
    >
      <Image
        src={post.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-block rounded bg-brand-green px-2 py-1 text-xs font-bold uppercase text-brand-dark">
          {post.category}
        </span>
        <p className="mt-2 font-heading text-lg font-bold leading-snug text-white">{post.title}</p>
        <p className="mt-1 text-sm text-white/80">
          {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>
    </Link>
  );
}
