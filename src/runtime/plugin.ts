import { defineNuxtPlugin } from '#app'
import components from './components'
export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(components).forEach((key: string) =>
    nuxtApp.vueApp.component(key, components[key])
  )
})
