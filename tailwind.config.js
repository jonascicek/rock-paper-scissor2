/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        metalmania: ['Metalmania', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: ['tailwindcss'],
}
