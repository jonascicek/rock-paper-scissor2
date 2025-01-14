/** @type {import('tailwindcss').Config} */

export default {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        metalmania: ['Metalmania'],
      }
    },
  },
  plugins: ['tailwindcss'],
}

