export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore', 
    ],
  },
  imports: {
    dirs: ['store'],
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
