/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif']
      },
      colors: {
        'w': '#fff',
        'b': '#000',
        'pera': '#6C6C6C',
        'c1': '#F40404'
      }
    },
  },
  plugins: [],
}