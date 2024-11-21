const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/patterns/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora Variable', ...defaultTheme.fontFamily.serif],
        sans: ['Instrument Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'fluid-xs': 'var(--step--2)',
        'fluid-sm': 'var(--step--1)',
        'fluid-base': 'var(--step-0)',
        'fluid-lg': 'var(--step-1)',
        'fluid-xl': 'var(--step-2)',
        'fluid-2xl': 'var(--step-3)',
        'fluid-3xl': 'var(--step-4)',
        'fluid-4xl': 'var(--step-5)',
        'fluid-5xl': 'var(--step-6)',
        'fluid-6xl': 'var(--step-7)',
        'fluid-7xl': 'var(--step-8)',
        'fluid-8xl': 'var(--step-9)',
      },
      spacing: {
        'fluid-3xs': 'var(--space-3xs)',
        'fluid-2xs': 'var(--space-2xs)',
        'fluid-xs': 'var(--space-xs)',
        'fluid-sm': 'var(--space-s)',
        'fluid-md': 'var(--space-m)',
        'fluid-lg': 'var(--space-l)',
        'fluid-xl': 'var(--space-xl)',
        'fluid-2xl': 'var(--space-2xl)',
        'fluid-3xl': 'var(--space-3xl)',
        'fluid-4xl': 'var(--space-4xl)',
        'fluid-5xl': 'var(--space-5xl)',
        'fluid-6xl': 'var(--space-6xl)',
        'fluid-7xl': 'var(--space-7xl)',
        'fluid-8xl': 'var(--space-8xl)',
        'fluid-9xl': 'var(--space-9xl)',
      },
      colors: {
        sand: '#f9e4d6',
        'sand-darkened': '#eca97d',
        black: '#010301',
        'black-lightened': '#252424',
        blue: '#2d2691',
        red: '#a23648',
        yellow: '#fccf00',
        white: '#faf5f7',
        transparent: 'transparent',
      },
    },
  },
};
