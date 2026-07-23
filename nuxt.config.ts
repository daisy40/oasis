// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from 'nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/layers/tools" as *;
          `
        }
      }
    }
  },

  postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: ['./app/assets/styles/layers/settings/_breakpoints.scss']
      },
      'postcss-custom-media': {}
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'brand',
        dir: resolve('./app/assets/icons/brand')
      },
      {
        prefix: 'ui',
        dir: resolve('./app/assets/icons/ui')
      }
    ]
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint'
  ]
})
