/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'darkModeBlack':'#1a1b1e',
        'darkModeGray1':'#f7f7f5',
        'darkModeGray2':'#2b2d31',
        'ghost-accent-color': '#612bff'
      }
    },
  },
  plugins: [],
}

