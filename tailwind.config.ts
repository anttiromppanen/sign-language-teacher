import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "470px",
      },
      fontFamily: {
        alice: ["var(--font-alice)", "sans-serif"],
        "playfair-display": ["var(--font-playfair-display)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-light": "var(--green-light)",
        "green-semilight": "var(--green-semilight)",
        "green-dark": "var(--green-dark)",
        orange: "var(--orange)",
        brown: "var(--brown)",
      },
    },
  },
  plugins: [],
};
export default config;
