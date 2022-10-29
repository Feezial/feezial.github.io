export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'port',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"preconnect", href:"https://fonts.googleapis.com"},
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:""},
      { href:"https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap", rel:"stylesheet"},
      {href:"https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css", rel:"stylesheet"},
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
    ]
  },

  css: [
    '~/assets/css/main.css',
  ],

  plugins: [
  ],

  components: true,

  
  buildModules: [
    'nuxt-windicss',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    },
    extraPlugins: {
      scrollTo: true
    }
  },
  
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
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
  }
}
