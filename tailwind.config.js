/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#727474',
        red: '#EF3F27',
        orange: '#FF6418',
        black: '#020105',
        lightGray: '#F9F9F9',
        newOrange: '#FF7E00',
        white: '#FFFFFF',
        innerBlack: '#27282A',
      },
    },
  },
  plugins: [],
}
