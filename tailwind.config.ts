import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B213F",
        coral: "#F25C54",
        dune: "#F5D260",
        mist: "#8EA3C8",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(242,92,84,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,210,96,0.35), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
