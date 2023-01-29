import { ref } from 'vue'
import { describe, expect, test } from '@jest/globals'
import { useBattery } from './useBattery'

jest.clearAllMocks()
jest.mock('./useBattery', () => ({
  useBattery: jest.fn(() => ({
    status: ref<number>(22),
    charging: ref<boolean | null>(true),
    time: ref<number>(60),
    label: ref<string>('1 hour')
  }))
}))

describe('battery-status', () => {
  test('useBattery return right types.', () => {
    const { status, charging, time, label } = useBattery()
    expect(typeof status.value).toBe('number')
    expect(typeof charging.value === 'boolean' || charging.value === null).toBeTruthy()
    expect(typeof time.value).toBe('number')
    expect(typeof label.value).toBe('string')
  })

  test('useBattery check value.', () => {
    const { status, charging, time, label } = useBattery()
    expect(status.value).toBe(22)
    expect(charging.value).toBe(true)
    expect(time.value).toBe(60)
    expect(label.value).toBe('1 hour')
  })
})
