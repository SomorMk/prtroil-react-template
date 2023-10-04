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
      },
      backgroundImage: {
        'bannerBg': 'url("/banner.png")',
        'learnBg': 'url("/banner2.png")',
        'ser1': 'url("/service1.png")',
        'ser2': 'url("/service2.png")',
        'ser3': 'url("/service2.png")',
        'blog1': 'url("/blog1.png")',
        'blog2': 'url("/blog2.png")',
        'blog3': 'url("/blog3.png")',
      }
    },
  },
  plugins: [],
}