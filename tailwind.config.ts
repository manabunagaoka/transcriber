import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'bg-gray-900',
    'text-gray-100',
    'bg-gray-800',
    'p-4',
    'shadow-lg',
    'z-50',
    'text-2xl',
    'font-bold',
    'text-center',
    'text-white',
    'pt-16',
    // Add any other Tailwind classes you're using
  ],
  plugins: [],
};

export default config;