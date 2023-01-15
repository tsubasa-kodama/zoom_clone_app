/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        theme: {
          0: "#0972eb",
          1: "#ff742e",
          success: "#01a739",
          error: "#b72726",
        },
        gray: {
          0: "#f8f8fa",
          3: "#f2f2f7",
          1: "#e9e9f0",
          2: "#222230",
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "9999px",
        DEFAULT: "0.25rem",
      },
    },
  },
  plugins: [],
}
