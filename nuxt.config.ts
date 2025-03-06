export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/google-fonts',
		'nuxt-svgo',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'dayjs-nuxt',
	],
	tailwindcss: {
		viewer: false,
		cssPath: ['~/assets/tailwind.css', { injectPosition: 'first' }],
	},
	googleFonts: {
		families: {
			'Source Code Pro': '200..900',
			'League Spartan': '100..900',
		},
		preload: true,
	},
	dayjs: {
		plugins: ['timezone'],
		defaultTimezone: 'Africa/Accra',
	},
	nitro: {
		preset: 'vercel',
	},
})