module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerColor: "#26235f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
