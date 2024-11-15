// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-og-image',
  ],
  devtools: { enabled: true },
  site: { 
    url: 'https://example.com', 
    name: 'My Awesome Website' 
    }, 
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
})
