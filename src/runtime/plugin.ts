import { defineNuxtPlugin } from '#app'
import batteryStatus from './components/battery-status.vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('battery-status', batteryStatus)
})
