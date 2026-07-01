import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1EC714",
          // Same hue as brand-green, darkened for AA-compliant text/icon contrast on
          // light backgrounds (the raw #1EC714 fails WCAG contrast as a text color).
          "green-ink": "#12740C",
          gold: "#FFCC00",
          dark: "#111111",
          ink: "#222222",
          muted: "#696969",
          line: "#e6e6e6",
          surface: "#f7f7f7",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Arial", "sans-serif"],
        body: ["var(--font-roboto)", "Arial", "sans-serif"],
        accent: ["var(--font-open-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 30px rgba(0, 0, 0, 0.08)",
        header: "0 8px 26px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
