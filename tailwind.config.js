/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Farben aus Emergent-Optik
        background: "#ffffff", // Weißer Seitenhintergrund
        foreground: "#111827", // Dunkles Grau (Text)
        card: "#ffffff",       // Kartenhintergrund

        primary: {
          DEFAULT: "#0d9488", // Emergent-Teal (Teal 600)
          hover: "#0f766e",   // Teal 700 für Hover
        },

        muted: {
          foreground: "#6b7280", // Text-muted-foreground
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        xl: "var(--radius)",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
}
