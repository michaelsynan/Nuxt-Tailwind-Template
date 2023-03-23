// https://v3.nuxtjs.org/api/configuration/nuxt.config

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/Nuxt-Tailwind-Template/',
  },

  // Set the publicPath for build files
  build: {
    publicPath: '/Nuxt-Tailwind-Template/_nuxt/',
  },
  modules: [
    '@pinia/nuxt',
    ['unplugin-icons/nuxt', { autoInstall: true }]
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  vite: {
    plugins: [
        Components({
            resolvers: IconsResolver(),
        }),
        Icons(),
    ]
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/main.css'],
  extends: [
    'github:michaelsynan/nuxt-test'
 ]
});
