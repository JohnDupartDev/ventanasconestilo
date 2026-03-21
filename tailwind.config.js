/** @type {import('tailwindcss').Config} */
export default {
  // Habilitamos el modo oscuro basado en clase para control total con el toggle
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // El Verde Corporativo (Kinetick Green) se mantiene constante como fuente de luz
        primary: {
          DEFAULT: "#dcef42", // El verde vibrante de la especificación
          container: "#c0d222", // El tono para degradados
        },
        "on-primary": "#2e3300",

        // Arquitectura de Superficies Dinámicas
        // Los valores ahora apuntan a variables CSS que definiremos en el layout
        surface: {
          DEFAULT: "var(--color-surface)",          // Base infinita
          bright: "var(--color-surface-bright)",
          lowest: "var(--color-surface-lowest)",    // Fondo más profundo
          "container-low": "var(--color-surface-container-low)",
          container: "var(--color-surface-container)",
          "container-high": "var(--color-surface-container-high)",
          "container-highest": "var(--color-surface-container-highest)",
        },
        
        // Texto y Bordes Fantasma adaptativos
        "on-surface": "var(--color-on-surface)", // Texto principal (evita el blanco puro)
        outline: {
          variant: "var(--color-outline-variant)", // El "Ghost Border"
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"], // La "Voz" futurista (Display scale)
        sans: ["Inter", "sans-serif"], // Legibilidad neutra (Functional scale)
        label: ["'Plus Jakarta Sans'", "sans-serif"], // Datos técnicos (Micro-copy)
      },
      backgroundImage: {
        // Degradado de firma a 135 grados para CTAs con "peso"
        "primary-gradient": "linear-gradient(135deg, #dcef42 0%, #c0d222 100%)",
        // Textura para elementos flotantes / Glassmorphism
        "glass-gradient": "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
      },
      borderRadius: {
        md: "0.375rem", // Para elementos pequeños (botones, inputs)
        xl: "0.75rem",  // Para contenedores grandes (cards, módulos)
      },
      // Añadimos una transición por defecto para que el cambio de tema sea fluido
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};