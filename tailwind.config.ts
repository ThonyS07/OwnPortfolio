import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "360px",

			md: "768px",

			lg: "1366px",

			xl: "1920px",

			"2xl": "2000px",
		},

		colors: {
			whatsapp: " #00d95f",
			github: "#1a1d2c",
			instagram: "#9339a6",
			gmail: "#ea4335",
			linkedin: "#006699",
			disable: "#A9AFD9",
			green: "#389E0D",
			purple10: "#F8F8FF",
			purple9: "#E1E1FF",
			purple8: "#CDCDFF",
			purple7: "#BBBBFF",
			purple6: "#A7A7FF",
			purple5: "#9393FF",
			purple4: "#8282FF",
			purple3: "#6B6BFF",
			purple2: "#5D5DFF",
			purple1: "#4F4FFF",
			blanco: "#FFFFFF",
			mora9: "#FAF8FF",
			mora8: "#F0E8FF",
			mora7: "#E3D4FF",
			mora6: "#CCB4FA",
			mora5: "#B997F9",
			mora4: "#A57BF5",
			mora3: "#935FF5",
			mora2: "#8249EF",
			mora1: "#6E2EE7",
			negro10: "#F0F3FF",
			negro9: "#DDE0F1",
			negro8: "#B1B6D0",
			negro7: "#8F94B0",
			negro6: "#6A708C",
			negro5: "#4B506B",
			negro4: "#30344A",
			negro3: "#1A1D2C",
			negro2: "#0F1116",
			negro1: "#000000",
		},
		extend: {
			width: {
				"38": "38px",
				"46": "46px",
				"54": "54px",
				"89": "89px",
				"100": "100px",
				"120": "120px",
				"140": "140px",
				"159": "159px",
			},
			height: {
				"28": "28px",
				"36": "36px",
				"42": "42px",
				"48": "48px",
				"56": "56px",
			},
			backgroundColor: {
				dark: "#A57BF5",
				light: "#FFFFFF",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		fontSize: {
			xs: ["12px", "1.33"],
			sm: ["14px", "1.29"],
			base: ["16px", "1.25"],
			lg: ["18px", "1.22"],
			xl: ["20px", "1.2"],
		},
		fontFamily: {
			sans: ["lato"],
		},
		borderRadius: {
			lg: "28px",
			full: "999px",
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
	],
};

export default config;
