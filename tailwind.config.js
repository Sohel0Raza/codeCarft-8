/** @type {import('tailwindcss').Config} */
module.export = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#67e8f9",

          "secondary": "#e879f9",

          "accent": "#61e293",

          "neutral": "#231825",

          "info": "#3DA5F5",

          "success": "#2BBFA9",

          "warning": "#F1B065",

          "error": "#FA4C75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

