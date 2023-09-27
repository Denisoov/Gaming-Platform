export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/eslint-module'],
  pinia: {
    autoImports: ['defineStore'],
  },
  // Настройка автоимпортов
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
});
