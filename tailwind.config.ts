import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EFF2F9",
          100: "#D9E0F0",
          200: "#B0BFE0",
          300: "#7A93C9",
          400: "#4A6BAF",
          500: "#2A4F96",
          600: "#1A3B7C",
          700: "#0F2A5E",
          800: "#0B1F4A",
          900: "#071433",
        },
        gold: {
          50: "#FDF8EC",
          100: "#FAF0D0",
          200: "#F3DC99",
          300: "#ECC55E",
          400: "#E3B030",
          500: "#C9931A",
          600: "#A87614",
          700: "#865C10",
          800: "#64440C",
          900: "#422D08",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
