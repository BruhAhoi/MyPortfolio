/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        border: '#1e1e2e',
        accent: '#7c3aed',
        'accent-light': '#a855f7',
        'accent-glow': '#7c3aed33',
        text: '#e2e2f0',
        muted: '#6b6b8a',
      },
    },
  },
  plugins: [],
}
