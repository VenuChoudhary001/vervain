/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          DEFAULT:'#0F0F0F',
          100:"#272727",
          200:"#222"
        },
        white:"#F1F1F1",
        
      },
      fontFamily:{
        primary:[ 'Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}