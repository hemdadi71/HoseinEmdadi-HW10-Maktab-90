/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './main.js', './src/**/*.js'],
  content: [],
  theme: {
    extend: {
      colors: {
        brown: '#A62626',
      },
      fontFamily: {
        vazir: 'vazir',
      },
    },
  },
  plugins: [],
};
