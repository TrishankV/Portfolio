/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['Arcade Regular', 'sans-serif'], // Updated font name
      },
      fontSize: {
        '7xl': '5rem', // Custom size example
        '8xl': '6rem', // Larger custom size example
      },
      colors: {
        'arcade-black': '#000000',
        'arcade-green': '#00FF00',
        'arcade-pink': '#FF00FF',
        'arcade-blue': '#00FFFF',
        'arcade-yellow': '#FFFF00',
      },
    },
  },
  plugins: [],
}
