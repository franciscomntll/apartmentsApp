const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary : "#252f3e"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      appearance: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
