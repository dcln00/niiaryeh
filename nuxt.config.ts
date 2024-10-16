export default defineNuxtConfig({
	devtools: { enabled: false },
	app: {
		head: {
			title: 'niiaryeh',
			meta: [
				{
					name: 'description',
					content: 'nii aryeh',
				},
			],
		},
	},
	css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/style/style.scss'],
	components: {
		global: true,
		dirs: [
			{ path: '~/components/global' },
			{ path: '~/components/ui' },
			'~/components',
		],
	},
	modules: [
		'@nuxtjs/device',
		'@nuxt/image',
		'nuxt-icon',
		'@nuxt/content',
		'@nuxthq/studio',
		'@nuxt/fonts',
		'@nuxtjs/sitemap',
	],
	fonts: {
		families: [
			{ name: "'League Spartan', sans-serif", provider: 'google' },
			{ name: "'Montserrat', sans-serif", provider: 'google' },
		],
		provider: 'google',
		defaults: {
			fallbacks: {
				'sans-serif': []
			}
		}
	},
	site: {
		url: 'https://www.niiaryeh.com',
	},
	runtimeConfig: {
		public: {
			studioTokens: process.env.NUXT_PUBLIC_STUDIO_TOKENS,
		},
	},
	nitro: {
		preset: 'vercel',
	},
})
