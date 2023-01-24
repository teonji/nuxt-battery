export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['../src/module'],
  imports: {
    autoImport: true
  }
})
