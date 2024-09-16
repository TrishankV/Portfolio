/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['Press Start 2P', 'cursive'],
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
