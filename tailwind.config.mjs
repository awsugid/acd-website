import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				gradient: {
					start: '#404040',
					mid1: '#222E3D',
					mid2: '#3B223D',
					end: '#563558',
				}
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135.21deg, #404040 0%, #222E3D 25.09%, #3B223D 69.49%, #563558 100.37%)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 2s infinite',
			}
		},
	},
	plugins: [typography],
}
