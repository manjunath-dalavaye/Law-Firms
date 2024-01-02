module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fffbf2",
          300: "#e6e6e6",
          600: "#808080",
          700: "#6a6a6a",
          900: "#1d1d1d",
          "900_02": "#171717",
          "900_01": "#232222",
          "900_19": "#19191919",
          "300_01": "#e4e4e4",
          "800_7f": "#4747477f",
        },
        black: { 900: "#111010", "900_7e": "#0000007e", "900_01": "#000000" },
        white: {
          A700_5e: "#ffffff5e",
          A700_63: "#ffffff63",
          A700_75: "#ffffff75",
          A700_19: "#ffffff19",
          A700: "#ffffff",
        },
        amber: { 300: "#fdd65b" },
        orange: { 300: "#e3b748" },
        blue_gray: { 900: "#2d2d2d", "900_01": "#373737" },
      },
      fontFamily: {
        inter: "Inter",
        helveticanowdisplay: "Helvetica Now Display",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
