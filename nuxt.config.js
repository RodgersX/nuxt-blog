export default {
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My cool Web development blog',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
      },
    ],
  },

  loading: {
    color: '#00FF00',
    height: '4px',
    duration: 5000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/core-components.js'
  ], 

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://nuxt-blog-c6984-default-rtdb.firebaseio.com',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
}
