export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"dayjs-nuxt",
		"@nuxt/fonts",
	],
	tailwindcss: {
		viewer: false,
	},
	fonts: {
		defaults: {
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	},
	dayjs: {
		plugins: ["timezone"],
		defaultTimezone: "Africa/Accra",
	},
	nitro: {
		preset: "vercel",
	},
})