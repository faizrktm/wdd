module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5F7464',
        'blackish': '#383838',
        'rose': '#D4C8BE',
        'wind': '#ababab',
        'whiteish': '#EEEEEE',
      },
      fontFamily: {
        'cormorant': ['Cormorant', 'serif'],
        'amita': ['Amita', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
