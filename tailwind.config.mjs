/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
		},
		extend: {
			colors: {
				'c-blue-500': 'var(--blue-500)',
				'c-green-400': 'var(--green-400)',
				'c-green-500': 'var(--green-500)',
				'c-lime-500': 'var(--lime-500)',
				'c-orange-500': 'var(--orange-500)',
				'c-purple-600': 'var(--purple-600)',
				'c-red-500': 'var(--red-500)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
