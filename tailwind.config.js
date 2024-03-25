/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      gradientColorStops: {
        'yellow-tone': '#fff7ad',
        'pink-tone': '#ffa9f9',
      },
      colors:{
        'hovered':'#fff7ad'
      }
    },
  },
  plugins: [],
}

