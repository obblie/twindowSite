import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "76rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      colors: {
        surface: "hsl(var(--surface))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px hsl(var(--shadow) / 0.55)",
        panel: "0 20px 60px -30px hsl(var(--shadow) / 0.7)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 20%, hsl(var(--accent) / 0.15), transparent 45%), radial-gradient(circle at 80% 10%, hsl(200 95% 55% / 0.14), transparent 40%), radial-gradient(circle at 50% 100%, hsl(190 85% 45% / 0.1), transparent 45%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "0.95" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
