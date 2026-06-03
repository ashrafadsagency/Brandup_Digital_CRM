import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { brandNavy: '#081427', brandGold: '#D4AF37', brandCyan: '#19C7D4' } } }, plugins: [] };
export default config;
