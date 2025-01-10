/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        ginger: 'rgba(249, 228, 214, 1)',
      },
    },
    container: {
      center: true,
      padding: '1em',
      screens: {
        '2xl': '1600px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
