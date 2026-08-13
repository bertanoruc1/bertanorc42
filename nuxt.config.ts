// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@nuxt/content',
  ],

  // Not: UnoCSS ayarları burada değil, projenin kökündeki uno.config.ts
  // dosyasında tutuluyor (presetler + ikon koleksiyonları + safelist).
  // Burada ikinci bir "unocss.presets" tanımı olması çakışmaya yol açıyordu.

  nitro: {
    prerender: {
      ignore: [
        '/__nuxt_content'  // Nuxt Content dosyalarını prerender etme
      ]
    }
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/components/assets/css/main.css'
  ],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
        { rel: "icon", type: "image/png", href: "/logo.png" }
      ]
    }
  },

  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS
  }
})