export type HeroSlide = {
  heading: string;
  body: string;
  image: string;
  buttonText: string;
  buttonHref: string;
};

/** Verbatim from the live site's Revolution Slider (3 slides, homepage hero carousel). */
export const heroSlides: HeroSlide[] = [
  {
    heading: "We Build Carefully",
    body: "BIL is an international company with indigenous roots, born out of the passion for providing innovative solutions to the oil and gas industry.",
    image: "/uploads/2023/10/oil-platform-ocean-with-sun-setting-it.jpg",
    buttonText: "Our Services",
    buttonHref: "/services",
  },
  {
    heading: "Foremost Oil and Gas Company",
    body: "We operate a system that delivers cost-effective solutions to customers' requirements, while deploying state-of-the-art, up to date technology.",
    image: "/uploads/2023/10/oil-pump-silhouette-night.jpg",
    buttonText: "Learn More",
    buttonHref: "/about-us",
  },
  {
    heading: "Renovation Services",
    body: "In scelerisque leo et orci porta auctor. Sed varius a dui elementum euismod. Morbi euismod pellentesque justo nec eleifend. Aliquam erat volutpat. Nam condimentum malesuada consectetur.",
    image: "/uploads/2019/11/s-31.jpg",
    buttonText: "Get Quote",
    buttonHref: "/contact-us",
  },
];

export const clientLogos = [
  { name: "Chevron", image: "/uploads/2023/10/5494120-chevron-logo-logodix-chevron-logo-png-480_360_preview.png" },
  { name: "Shell", image: "/uploads/2023/10/Shell-logo-1.jpg" },
  { name: "TotalEnergies", image: "/uploads/2023/10/TotalEnergies-Logo.png" },
  { name: "Mobil", image: "/uploads/2024/01/mobil-logo-png-transparent.png" },
];
