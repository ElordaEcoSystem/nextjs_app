/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        main: "35px 19px 49px -30px rgba(0, 42, 81, 0.2)",
      },
      colors: {
        prime: "#002A51",
        secondary: "#E6EAEE",
        def_black: "#191919",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1076px",
        "2xl": "1076px",
      },
    },
  },
  plugins: [],
};
