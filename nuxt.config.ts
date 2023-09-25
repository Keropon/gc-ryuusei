// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/html-validator',
    '@nuxtjs/apollo',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
  ssr: false,
  app: {
    head: {
      'htmlAttrs': {
        lang: 'es',
      },
      'meta': [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.gamercafe.cl' },
      ]
    }
  },
  css: [
    "~/assets/styles/main.scss",
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '-mode'
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://www.gamercafe.cl/graphql'
      }
    },
  },
  typescript: {
		shim: false,    
    strict: true
	},
  htmlValidator: {
    usePrettier: false,
  },
  devtools: {
    enabled: true
  }
})
