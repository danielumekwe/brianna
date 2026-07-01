export const siteConfig = {
  name: "Brianna Integrated Limited",
  shortName: "BIL",
  url: "https://briannaintegrated.com",
  description: "Providing innovative solutions to the oil and gas industry.",
  tagline:
    "BIL is an international company with indigenous roots, born out of the passion for providing innovative solutions to the oil and gas industry.",
  email: "info@briannaintegrated.com",
  phone: "+234 915 438 2133",
  phoneHref: "+2349154382133",
  offices: [
    { label: "Nigeria Office", address: "1 Bourdillon Court, Chevron Drive, Lekki, Lagos" },
    { label: "US Office", address: "17330 Palmetto Pines Houston, 77032" },
  ],
  logo: "/uploads/2023/10/bil-logo-1.png",
  footerLogo: "/uploads/2023/10/bil-logo.jpg",
  social: {
    facebook: "https://www.facebook.com/briannaintegrated",
    twitter: "https://twitter.com/briannaintegrated",
    youtube: "https://www.youtube.com/channel/UC1hlWYgndZw7PEHWeTbYvfA",
  },
  mapEmbedSrc: "https://maps.google.com/maps?q=Brianna%20Integrated&t=m&z=17&output=embed&iwloc=near",
  headerWorkingHours: "Mon-Fri: 8:00-18:00",
  footerWorkingHours: ["Monday-Friday: 9am - 6pm", "Saturday-Sunday: Closed"],
} as const;
