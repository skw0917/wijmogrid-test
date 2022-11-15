import { defineNuxtConfig } from '#ustra/nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  modules: ['@ustra/nuxt'],
  plugins: [],
  vite: {
    optimizeDeps: {
      include: ['event-source-polyfill'],
    },
  },
  ustra: {
    server: {
      middleware: {
        proxy: {
          proxies: {}
        }
      }
    },
    auth: {
      enabled: false,
      type: 'jwt',
      jwt: {
        accessTokenKey: 'X-GPC-SC-ACC-TOKEN',
        refreshTokenKey: 'X-GPC-SC-REF-TOKEN',
      },
    },
    nuxt: {
      meta: {
        layout: false,
        auth: {
          required: true,
        },
      },
      env: {
        secret: 'Z3NjLWNyeXB0by1rZXkxMQ==',
      },
      wijmo: {
        enabled: true,
        styles: {
          theme: 'light',
        },
        culture: 'ko',
      },
      management: {
        enabled: false,
      },
    },
  },
})
