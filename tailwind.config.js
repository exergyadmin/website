/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          // You can add other shades of blue here if needed
          '600': '#2F3B69', // Primary blue color
        },
      },
    },
  },
  plugins: [],
}