/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ["Josefin Sans", "sans-serif"],
      },
      colors: {
        'primary': '#680000',
        'secondary': '#5a0000',
      },
    },
  },
  plugins: [],
}
