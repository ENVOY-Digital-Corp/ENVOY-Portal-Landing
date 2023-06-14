/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-primary": "#0f0f0f"
      },
      container: {
        center: true,
        padding: "1.5rem"
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray[400]"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-links": theme("colors.indigo[500]"),
          }
        }
      })
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
