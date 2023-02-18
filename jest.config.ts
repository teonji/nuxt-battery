import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  transform: {
    '/.[jt]sx?$/': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/runtime/**/*.ts',
    '<rootDir>/src/runtime/**/*.vue',
    '!<rootDir>/src/runtime/plugin.ts',
    '!<rootDir>/src/runtime/components/index.ts',
    '!<rootDir>/src/runtime/**/*.stories.ts'
  ]
}

module.exports = config
