export default defineNuxtConfig({
	devtools: { enabled: false },
	app: {
		head: {
			title: "niiaryeh",
			meta: [
				{
					name: "description",
					content: "nii aryeh",
				},
			],
		},
	},
	css: [
		"bootstrap/dist/css/bootstrap.min.css", 
		"~/assets/style/style.scss"
	],
	components: {
		global: true,
		dirs: [
			{path: '~/components/global'},
			{path: '~/components/ui'},
			'~/components'
		]
	},
	modules: [
		'@nuxtjs/device',
		'@nuxt/image',
		'nuxt-icon',
		'@nuxt/content',
	],
	nitro: {
		preset: 'vercel',
	},
});
