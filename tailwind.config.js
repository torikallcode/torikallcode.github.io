/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ['Poppins', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      colors:{
        hitam: ["#252525"],
        putih: ["#F4F4F4"],
      }
    },
  },
  plugins: [],
}

