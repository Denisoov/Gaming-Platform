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
  }
})
