/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1248px',
			},
		},
		extend: {
			fontFamily: {
				serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
			}

		},
	},
	daisyui: {
		themes: ['light', 'dark'],
		darkTheme: 'dark',
		logs: false,
	},
	plugins: [
		require('daisyui'),
	],
}
