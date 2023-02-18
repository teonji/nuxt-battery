import { ref } from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import { expect, test, describe } from '@jest/globals'
import batteryStatus from './index.vue'

jest.clearAllMocks()
jest.mock('../../composables/useBattery', () => ({
  useBattery: jest.fn(() => ({
    status: ref<number>(22),
    charging: ref<boolean | null>(true),
    time: ref<number>(60),
    label: ref<string>('1 hour')
  }))
}))

describe('battery-status', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(batteryStatus)
    expect(wrapper.vm).toBeTruthy()
  })

  test('has a div wrapper', () => {
    const wrapper = shallowMount(batteryStatus)
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    const byId = wrapper.find('.battery-wrapper')
    expect(byId.element.className).toBe('battery-wrapper')
  })

  test('has battery status height set properly', () => {
    const wrapper = shallowMount(batteryStatus)
    const batteryLevel = wrapper.find('.battery-level')
    const styles = window.getComputedStyle(batteryLevel.element)
    expect(styles.getPropertyValue('height')).toEqual('22%')
  })
})
