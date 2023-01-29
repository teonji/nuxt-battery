import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver } from '@nuxt/kit'
export interface ModuleOptions {
  addPlugin: boolean
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-battery',
    configKey: 'nuxtBattery'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
