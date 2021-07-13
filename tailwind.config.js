module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: "15vh",
        main: "85vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
