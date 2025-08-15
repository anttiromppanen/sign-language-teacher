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
				"background-alt": "var(--background-alt)",
				"text-primary": "var(--text-primary)",
				"text-secondary": "var(--text-secondary)",
				highlight: "var(--highlight)",
				"highlight-hover": "var(--highlight-hover)",
				"low-contrast": "var(--low-contrast)",
				warning: "var(--warning)",
				success: "var(--success)",
				info: "var(--info)",
			},
		},
	},
	plugins: [],
};
export default config;
