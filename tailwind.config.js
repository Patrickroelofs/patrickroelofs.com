/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				hermes: {
					100: 'oklch(93.28% 0.03 58.28)',
					200: 'oklch(87.26% 0.05 52.81)',
					300: 'oklch(78.86% 0.08 49.60)',
					400: 'oklch(69.30% 0.12 43.22)',
					500: 'oklch(62.79% 0.15 39.11)',
					600: 'oklch(57.58% 0.16 34.67)',
					700: 'oklch(49.78% 0.14 31.71)',
					800: 'oklch(43.04% 0.11 28.97)',
					900: 'oklch(37.70% 0.09 28.57)',
					950: 'oklch(24.86% 0.06 26.91)',
					50: 'oklch(97.42% 0.01 58.22)'
				}
			},
			fontFamily: {
				sans: ['Inter Variable', 'sans-serif'],
				serif: ['Unbounded Variable', 'serif']
			},
			backgroundImage: {
				texture: "url('./images/noise.png')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
