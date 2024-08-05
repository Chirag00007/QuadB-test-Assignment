/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greyish": "#f3f5f7",
        "black": "#141718"
      },
      screens: {
        "md": "768px"
      }
    },
  },
  plugins: [],
};

