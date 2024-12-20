// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  // Add this to ensure all used classes are included in production
  safelist: [
    'bg-blue-500',
    'bg-red-500',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'animate-pulse',
    'animate-sound-wave'
  ]
}

export default config