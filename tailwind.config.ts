import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        paper: "var(--paper)",
        card: "var(--card)",
        line: "var(--line)",
        pine: "var(--pine)",
        "pine-deep": "var(--pine-deep)",
        moss: "var(--moss)",
        "moss-pale": "var(--moss-pale)",
        seal: "var(--seal)",
        "seal-pale": "var(--seal-pale)",
        gold: "var(--gold)",
      },
      fontFamily: {
        "serif-tc": "var(--font-noto-serif-tc)",
        "sans-tc": "var(--font-noto-sans-tc)",
        "mono-jb": "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [],
};

export default config;
