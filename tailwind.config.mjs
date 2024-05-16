import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			colors: {
				hermes: {
					50: 'oklch(97.42% 0.01 58.22)',
					100: 'oklch(93.28% 0.03 58.28)',
					200: 'oklch(87.26% 0.05 52.81)',
					300: 'oklch(78.86% 0.08 49.60)',
					400: 'oklch(69.30% 0.12 43.22)',
					500: 'oklch(62.79% 0.15 39.11)',
					600: 'oklch(57.58% 0.16 34.67)',
					700: 'oklch(49.78% 0.14 31.71)',
					800: 'oklch(43.04% 0.11 28.97)',
					900: 'oklch(37.70% 0.09 28.57)',
					950: 'oklch(24.86% 0.06 26.91)'
				}
			},
			fontFamily: {
				display: ['Geologica Variable', ...defaultTheme.fontFamily.serif],
				sans: ['Figtree Variable', ...defaultTheme.fontFamily.sans] 
			},
		},
		fontSize: () => {
			/**
			 * Tailwind CSS Font Clamp function
			 * 
			 * @module tailwindConfig
			 * @see {@link https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp}
			*/
			const screenMin = 20
			const screenMax = 96

			const calcMulti = (multiMin = 0, multiMax = null) => {
				return {
					fsMax: 1.25 * Math.pow(1.2, multiMax || multiMin),
					fsMin: 1.125 * Math.pow(1.125, multiMin),
				}
			}
			
			const clamp = (multiMin = 0, multiMax = null) => {
				const _calcMulti = calcMulti(multiMin, multiMax || multiMin)
				const _fsMin = _calcMulti.fsMin
				const _fsMax = _calcMulti.fsMax
				return `clamp(${_fsMin}rem, calc(${_fsMin}rem + (${_fsMax} - ${_fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${_fsMax}rem)`
			}

			return {
				'2xl': clamp(3),
				'3xl': clamp(4),
				'4xl': clamp(5),
				'5xl': clamp(6),
				'6xl': clamp(7),
				'7xl': clamp(8),
				'8xl': clamp(9),
				'9xl': clamp(10),
				base: clamp(0),
				lg: clamp(1),
				sm: clamp(-1),
				xl: clamp(2),
				xs: clamp(-2),
			}
		},
	}
}
