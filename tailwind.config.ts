import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe3fe",
          300: "#92d3fe",
          400: "#5fb9fb",
          500: "#3a9af7",
          600: "#247dec",
          700: "#1c66d9",
          800: "#1d53b0",
          900: "#1d488b",
          950: "#172d54",
        },
        secondary: {
          50: "#fef2f2",
          100: "#fee2e3",
          200: "#ffc9cb",
          300: "#fda4a7",
          400: "#fa6f74",
          500: "#f24148",
          600: "#d31f26",
          700: "#bb1a20",
          800: "#9b191e",
          900: "#801c20",
          950: "#46090b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
