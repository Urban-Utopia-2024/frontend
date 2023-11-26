/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy Regular', 'sans-serif'],
        nunito: ['Nunito Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
