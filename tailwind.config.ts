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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        "10p": "10%",   // 10%
        "10p-dup": "10%", // Duplicate 10%
        "half": "50%",   // 1/2
        "30p": "30%",    // 30%
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
export default config;
