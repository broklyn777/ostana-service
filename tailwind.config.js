module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image': "url('public/img/mountains.jpeg')",
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
}