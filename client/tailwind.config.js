// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     fontFamily: {
//       display: ["Open Sans", "sans-serif"],
//       body: ["Open Sans", "sans-serif"],
//     },
//     extend: {
//       screens: {
//         mf: "990px",
//       }},
//     colors: {
//       white: "#fff",
//       gray: {
//         "100": "#f0ecf9",
//         "200": "#d9d9d9",
//         "300": "#a5ddda",
//         "400": "#a6aeb4",
//         "500": "#003a70",
//       },
//       turquoise: "#35b6b4",
//       black: "#000",
//       red: "#ff0000",
//       green: "#3bb133",
//       indigo: "#7045c4",
//     },
//     fontSize: {
//       "5xs": "12.87px",
//       "4xs": "12px",
//       "3xs": "15px",
//       "2xs": "15.44px",
//       xs: "16px",
//       sm: "16.19px",
//       base: "17px",
//       lg: "18px",
//       xl: "20px",
//       "2xl": "24px",
//       "3xl": "26px",
//       "4xl": "30px",
//       "5xl": "32px",
//       "6xl": "34.54px",
//       "7xl": "35px",
//       "8xl": "48px",
//     },
//   },
//   corePlugins: { preflight: false },
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif","group-focus"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors:{
        light6: "#a5ddda",
        dark1: "#003a70",
        light1: "#00acb3",
        dark2: "#00a5a7",
        mainpara: "#a6aeb4",
        light2: "#269c94",
      }
    },
  },
  plugins: [],
}
