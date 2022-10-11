// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}