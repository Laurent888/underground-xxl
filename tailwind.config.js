/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '800',
      extrabold: '900',
    },
    extend: {
      theme: {
        fontFamily: {
          sans: ['var(--font-montserrat)'],
        },
      },
      fontFamily: {
        sans: ['Montserrat'],
      },
      spacing: {
        128: '32rem',
        200: '44rem',
      },
      backgroundColor: {
        black: '#0a0a0a',
      },
      strokeWidth: {
        3: '10px',
      },
    },
  },
  plugins: [],
}
