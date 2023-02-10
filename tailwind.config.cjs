/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      keyframes: {
        rotation: {
            '0%': { transform : 'rotate(0deg)' },
            '100%': { transform : 'rotate(360deg)'}
        }
        
      },
      animation: {
        'rotation': 'rotation 7s linear infinite'
      }
    },
  },
  plugins: [],
}
