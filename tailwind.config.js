/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_bg:"#FFFFFF",
        demo_border:'#14C38E',
        sub_title_color: '#7A7A7A',
        hero_back: '#E3E3E3',
        honey_dew : '#F0FFF0',
        re_color: '#9F9F9F',
        hero_back:'#f0f3f4',

      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif']
      },
    },
  },
  plugins: [],
}