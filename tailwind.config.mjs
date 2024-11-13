const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/patterns/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: 'var(--step--2)',
      sm: 'var(--step--1)',
      base: 'var(--step-0)',
      lg: 'var(--step-1)',
      xl: 'var(--step-2)',
      '2xl': 'var(--step-3)',
      '3xl': 'var(--step-4)',
      '4xl': 'var(--step-5)',
    },
    spacing: {
      0: '0',
      '3xs': 'var(--space-3xs)',
      '2xs': 'var(--space-2xs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-s)',
      md: 'var(--space-m)',
      lg: 'var(--space-l)',
      xl: 'var(--space-xl)',
      '2xl': 'var(--space-2xl)',
      '3xl': 'var(--space-3xl)',
    },
    colors: {
      sand: '#f9e4d6',
      black: '#010301',
      "black-lightened": "#252424",
      blue: '#2d2691',
      red: '#a23648',
      yellow: '#fccf00',
      white: '#faf5f7',
    },
    extend: {
      fontFamily: {
        serif: ['Lora Variable', ...defaultTheme.fontFamily.serif],
        sans: ['Instrument Sans Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
