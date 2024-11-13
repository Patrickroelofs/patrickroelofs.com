const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f9e4d6',
        black: '#010301',
        blue: '#2d2691',
        red: '#a23648',
        yellow: '#fccf00',
        white: '#faf5f7',
      },
      fontFamily: {
        serif: ['Lora Variable', ...defaultTheme.fontFamily.serif],
        sans: ['Instrument Sans Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
