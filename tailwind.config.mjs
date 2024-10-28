/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
    logs: false,
  },
  plugins: [require('daisyui'),],
};
