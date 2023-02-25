/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        200: "44rem",
      },
      backgroundColor: {
        black: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
