export default {
  head: {
    title: 'Home 24',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
  },

  css: ['@/assets/main.css'],

  plugins: ['~/plugins/ant-design', '@/plugins/element-ui'],

  components: true,

  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [],

  build: {},

  ssr: true,
}
