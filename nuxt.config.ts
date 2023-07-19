export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  app: {
    head: {
      title: 'niiaryeh',
      meta: [
        {
          name: 'description',
          content: "Nii Aryeh's Github Portfolio.",
        },
        {
          name: 'keywords',
          content: 'Software, Web Developer',
        },
        //og
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Nii Aryeh' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '' },
        {
          property: 'og:description',
          content: 'Nii Aryeh - Software Engineer',
        },
        { property: 'og:site_name', content: 'Nii Aryeh' },
        {
          property: 'og:image:alt',
          content: 'Nii Aryeh - Software Engineer',
        },
        //tc
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '' },
        {
          property: 'twitter:title',
          content: 'Nii Aryeh',
        },
        {
          property: 'twitter:description',
          content: 'Nii Aryeh - Software Engineer',
        },
        { property: 'twitter:image', content: '' },
        {
          property: 'twitter:image:alt',
          content: 'Nii Aryeh - Software Engineer',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      script: [
        { src: 'https://use.fontawesome.com/7e475b8521.js' },
        { src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/style/style.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxt/content',
    '@nuxt/devtools',
    'nuxt-icon',
  ],

  devtools: {
    enabled: true,
  },
  content: {},
})
