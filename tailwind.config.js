/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Righteous: "Righteous",
        Skranji: "Skranji",
      },
      colors: {
        red: "rgb(206, 52, 75)",
      },
    },
  },
  plugins: [],
};
