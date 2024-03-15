/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",

        "icon-color": "rgba(var(--icon-color))",

        border: "rgba(var(--border))",

        card: "rgba(var(--card))",

        "copy-primary": "rgba(var(--copy-primary))",

        "copy-secondary": "rgba(var(--copy-secondary))",

        cta: "rgba(var(--cta))",

        "cta-active": "rgba(var(--cta-active))",

        "cta-text": "rgba(var(--cta-text))",

        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [],
}
