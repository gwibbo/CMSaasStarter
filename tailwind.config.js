/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          "primary": "#0077CC",
          "primary-content": "#FFFFFF",
          "secondary": "#FFAB4C",
          "neutral": "#4A4A4A",
          "neutral-content": "#F0F2F5",
          "accent": "#FFAB4C",
          "accent-content": "#FFFFFF",
          "base-content": "#333333",
          "base-100": "#F0F2F5",
          "base-200": "#E8EAF6",
          "success": "#37d399",
          "error": "#f77272",
        },
      }
    ],
  }
}
