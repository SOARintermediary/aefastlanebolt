/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B2B65',
          light: '#2A3D7D'
        },
        accent: {
          DEFAULT: '#C5E86C',
          dark: '#B2D559'
        },
        teal: {
          DEFAULT: '#008080',
          dark: '#006666'
        }
      }
    },
  },
  plugins: [],
};