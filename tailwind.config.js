/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(8 145 178)", // sua cor personalizada
      },
    },
  },
  variants: {},
  plugins: [],
};
