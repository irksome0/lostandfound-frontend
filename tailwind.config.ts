import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-secondary)",
        bg:{
          primary:"var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
        },
        foreground: "var(--foreground)",
        module: "var(--background-quaternary)",
        btn:{
          base: "var(--button-base)",
          secondary: "var(--button-secondary)",
          altBase: "var(--button-alt-base)",
          altSecondary: "var(--button-alt-secondary)",
        },
        brd:{
          base: "var(--border-base)",
          secondary: "var(--border-secondary)",
          baseSecondary: "var(--border-base-secondary)"
        },
        text:{
          base:"var(--foreground)",
          secondary:"var(--text-secondary)",
          tertiary:"var(--text-tertiary)",
          quaternary: "var(--text-text-quaternary)"
        }
      },
    },
  },
  plugins: [],
};
export default config;
