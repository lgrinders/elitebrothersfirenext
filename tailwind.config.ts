import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["var(--font-Inter)"],
      },
      colors: {
        EliteOrange: "#f89f21",
        EliteRed: "#E61B14",
        EliteRed2: "#ef4827",
      },
      keyframes: {
        shimmer: {
          to: {
            "background-position": "-200%",
          },
        },
        dropdown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        dropdown: "dropdown 0.3s ease-out",
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
} satisfies Config;
