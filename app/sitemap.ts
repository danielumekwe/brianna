import type { MetadataRoute } from "next";
import { newsPosts } from "@/lib/data/news";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about-us", "services", "contact-us", "news", "privacy-policy"];
  const serviceRoutes = services.map((service) => service.slug);
  const newsRoutes = newsPosts.map((post) => `news/${post.slug}`);
  const routes = Array.from(new Set([...staticRoutes, ...serviceRoutes, ...newsRoutes]));

  return routes.map((route) => ({
    url: route ? `${siteConfig.url}/${route}` : siteConfig.url,
    lastModified: new Date(),
    changeFrequency: route.startsWith("news") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "services" ? 0.9 : 0.7,
  }));
}
