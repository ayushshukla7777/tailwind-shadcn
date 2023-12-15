/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "fuchsia" : colors.fuchsia,
      },
      fontSize:{
        "xxs" : "0.6rem",
      },
    },
  },
  plugins: []
}

