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
				oxanium: ["var(--font-oxanium)", "sans-serif"],
				source_sans: ["var(--font-source_sans_3)", "serif"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"--secondary-pink": "var(--secondary-pink)",
				"--secondary-purple": "var(--secondary-purple)",
				"--secondary-blue": "var(--secondary-blue)",
				"--secondary-green": "var(--secondary-green)",
				"--secondary-yellow": "var(--secondary-yellow)",
			},
		},
	},
	plugins: [],
};
export default config;
