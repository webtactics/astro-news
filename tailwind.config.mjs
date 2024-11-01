/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    fontFamily: {
      sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
    logs: false,
  },
  plugins: [require("daisyui")],
};
