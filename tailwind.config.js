/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // <--- Add this line
  theme: {
    extend: {
      colors: {
        jobCardBlue: '#E3F2FD',
        jobCardPurple: '#EFE5FF',
        primaryPurple: '#7C3AED',
        primaryPurpleDark: '#5B21B6',
        theblue: color => color('#1E40AF'),
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};