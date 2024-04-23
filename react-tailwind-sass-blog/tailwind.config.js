/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'SVN-Have-Heart': ['SVN-Have Heart'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'darkModeBlack': '#1a1b1e',
        'darkModeGray1': '#f7f7f5',
        'darkModeGray2': '#2b2d31',
        'ghost-accent-color': '#612bff',
        'darkModeTextColor': '#f7f7f5'
      },
      gridTemplateColumns: {
        '80/20': '80% 20%',
        '50/50': '50% 50%',
        '20/80': '20% 80%',
        '70/30': '70% 30%',
        '30/70': '30% 70%',
        '90/10': '90% 10%',
        '40/60': '40% 60%',
        '100': '100%',
        '25%': '25% 25% 25% 25%',
        '12.5%': '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%',
        '33.3%': '33.3% 33.3% 33.3%'
      },
    },
  },
  plugins: [],
}

