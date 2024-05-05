/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue LT GEO', 'sans-serif'],
        'sailec': ['TBC Sailec', 'sans-serif'],
      },
      colors: {
        "active-orange": "#FD4100",
        "secondary-text": "#6F7383",
        "gray-bg": "#F2F2F6",
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
      },
      height: {
        fit: 'fit-content',
      },
      boxShadow: {
        custom: '0px 2px 16px 0px rgba(39, 42, 55, 0.13)',
      },
    },
  },
  plugins: [],
};