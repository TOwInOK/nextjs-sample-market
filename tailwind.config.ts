import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          dark: {
            bg: "#1a202c",
            text: "#ffffff",
          },
          light: {
            bg: "#1a202c",
            text: "#ffffff",
          },
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        itim: ["var(--font-itim)"],
      },
    },
  },

  plugins: [],
};
export default config;
