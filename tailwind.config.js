module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins"],
      },

    },
    colors: {
      primary: '#FF6363',
      black: '#000000',
      white: '#ffffff',
      'pink-600': '#db2777',
      'orange-600': '#ea580c',
      'green-700': '#15803d',
      'blue-bg': '#99becc',
      'blue-bg-soft': '#B7D2DB',
      'green-bg': '#99cccc',
      'green-bg-soft': '#B7DBDB',
      'pink-bg': '#cc99cc',
      'pink-bg-soft': '#dbb7db',
      'green-50': '#f0fdf4',
      'yellow': '#ffc82c',
      'yellow-bg': '#c3aaaa',
      'gray-dark': '#273444',
      'gray-text': '#374151',
      'gray-light': '#e5e7eb',
      'gray-400': '#cbd5e1',

    },




  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}