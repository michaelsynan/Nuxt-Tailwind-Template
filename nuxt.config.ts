// https://v3.nuxtjs.org/api/configuration/nuxt.config

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'


export default defineNuxtConfig({
  target: 'static',
  app: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt Tailwind Template',
      meta: [
        { name: 'description', content: 'Speed up your Nuxt 3 and Vue development with this starter template.' }
      ],
    }
  },
  prerender: {
    routes: [ process.env.BASE_URL || 'http://localhost:3000'],
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
