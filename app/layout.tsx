import type { Metadata } from "next";
import { domAnimation, LazyMotion } from "framer-motion";
import { Open_Sans, Poppins, Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/data/site-config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/uploads/2023/10/environmental-pollution-factory-exterior.jpg",
        width: 626,
        height: 417,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/uploads/2023/10/environmental-pollution-factory-exterior.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.social.facebook, siteConfig.social.twitter, siteConfig.social.youtube],
    address: siteConfig.offices.map((office) => ({
      "@type": "PostalAddress",
      name: office.label,
      streetAddress: office.address,
    })),
  };

  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${openSans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-green focus:px-4 focus:py-2 focus:font-bold focus:text-brand-dark"
        >
          Skip to content
        </a>
        <Navbar />
        <LazyMotion features={domAnimation} strict>
          <main id="main">{children}</main>
        </LazyMotion>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
