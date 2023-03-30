/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f5d0fe",

          "secondary": "#2A4D54",

          "accent": "#61e293",

          "neutral": "#231825",

          "info": "#3DA5F5",

          "base-100": "#ffff",

          "success": "#2BBFA9",

          "warning": "#F1B065",

          "error": "#FA4C75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

