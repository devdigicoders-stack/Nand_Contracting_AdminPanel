/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#071B2D',
          deep: '#071B2D',
          corporate: '#0798E8',
        },
        gold: {
          primary: '#FF7900',
          light: '#FFA755',
        },
        warm: {
          white: '#F7F6F2',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
