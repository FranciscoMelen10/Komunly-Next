/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "--yellow": "#DBFE5D",
        "--blue": "#53B0F9",
        "--blue-dark": "#010334",
        "--purple": "purple",
        "--green": "#8FDCC2",
        "--black": "#010101",
      }
    },
  },
  plugins: [],
};