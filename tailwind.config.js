/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      spacing: {
        128: "32rem",
        200: "44rem",
      },
      backgroundColor: {
        black: "#0a0a0a",
      },
      strokeWidth: {
        3: "10px",
      },
    },
  },
  plugins: [],
};
