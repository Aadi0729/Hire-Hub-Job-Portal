// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      background: '#242424',
      foreground: '#ffffff',
      // Add any other custom colors you need here
    },
  },
};
export const plugins = [];
