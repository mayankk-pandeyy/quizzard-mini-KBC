/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundd':"url('/src/assets/backgroundd.jpg')",
        'background':"url('/src/assets/background.jpg')",
      },
      border:{
        '5xl' : "5px solid white"
      }
    },
  },
  plugins: [],
}
