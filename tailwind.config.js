module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9c8d7c',
        'blackish': '#383838',
        'rose': '#D4C8BE',
        'wind': '#ababab',
        'whiteish': '#EEEEEE',
      },
      fontFamily: {
        'cormorant': ['Cormorant', 'serif'],
        'amita': ['Amita', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'daydream': ['Daydream', 'serif'],
        'lejour': ['Lejour', 'serif']
      }
    },
  },
  plugins: [],
}
