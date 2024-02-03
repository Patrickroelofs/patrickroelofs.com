/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			backgroundImage: {
				texture: "url('./images/noise.png')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
