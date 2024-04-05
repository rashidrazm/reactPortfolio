/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'violet' : '#6366f1',
      'black' : '#020617',
      'cyan' : '#0891b2',
      'li-white' : '#f1f5f9'
    }
  },
  plugins: [require("daisyui")],
}