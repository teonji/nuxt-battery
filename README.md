# Nuxt Battery module

A simple Nuxt 3 module to show info about your battery device. 

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

[![nuxt-battery](https://nuxt-battery.vercel.app/preview.png)](https://nuxt-battery.vercel.app)
[![nuxt-battery](https://nuxt-battery.vercel.app/browser-compability.png)](https://caniuse.com/?search=getBattery)

- [📖 &nbsp;Read the documentation](https://nuxt-battery.vercel.app)
- [💥 &nbsp;Try the demo](https://nuxt-battery.vercel.app/demo)

## Features

- Nuxt 3 with composables
- Nuxt 3 component battery-status imported automatically
- TypeScript support

## Install


Add `nuxt-battery` dev dependency to your project:

```bash [yarn]
yarn add nuxt-battery
```

Then, add `nuxt-battery` to the [`modules`](https://nuxt.com/docs/api/configuration/nuxt-config#modules) section of your Nuxt configuration:

```ts [nuxt.config.js|ts]
export default {
  modules: ['nuxt-battery'],
}
```

# Usage

Learn how to use the nuxt-battery module in your Nuxt 3 application.

> This module exposes composables that are [auto-imported](https://nuxt.com/docs/guide/directory-structure/composables) by Nuxt 3.

## `useBattery`

This composable return info about your battery status.

```vue
<script setup lang="ts">
const {
  status, // number - between 0 and 100 (-1 means the plugin still loading)
  charging, // boolean - true/false if it is charging or not
  time, // number - battery time remaining in minutes
  label // string - battery time remaining label 
} = useBattery()
</script>
```

## `<nuxt-battery />`

If you don't need to develop your own custom component, you can simply use this one to have a status battery.

::code-group
```vue [simple]
<template>
  <div>
    <nuxt-battery />
  </div>
</template>
```
```vue [complex]
<template>
  <div>
    <nuxt-battery
      :show-label
      :show-percentage
      :dark
      :colored
    />
  </div>
</template>
```

| **Key**          | **Type**  | **Default** | **Description**                                                    |
|------------------|-----------|-------------|--------------------------------------------------------------------|
| `showLabel`      | `boolean` | false       | If you need the remaining time label close to the battery icon     |
| `showPercentage` | `boolean` | false       | If you need to show percentage in battery icon (and label)         |
| `dark`           | `boolean` | false       | Default battery icn border is white, choose dark if you need black |
| `colored`        | `boolean` | true        | If you need to show green, yellow and red color in battery icon    |

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Build module using `yarn build` or `npm run build` to build once
  - Use `yarn build --stub` or `npm run build --stub` during active development
4. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-battery/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://www.npmjs.com/package/nuxt-battery

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-battery.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-battery

[license-src]: https://img.shields.io/npm/l/nuxt-battery.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://www.npmjs.com/package/nuxt-battery
