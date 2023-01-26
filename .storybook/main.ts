module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../src/runtime/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ],
  core: {
    builder: "storybook-builder-vite",
  }
}
