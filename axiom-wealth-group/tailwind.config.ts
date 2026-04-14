import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#EFE6D0',
        'rich-black': '#0C0B09',
        gold: '#C4A870',
        'gold-light': '#DCBF88',
        'gold-dark': '#8A7238',
        'text-muted': '#4A4336',
        'card-dark': '#131210',
        'border-dark': '#252320',
        'border-light': '#D4C8B0',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
