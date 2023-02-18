import { describe, expect, test } from '@jest/globals'
import { useBattery } from './useBattery'

describe('battery-status', () => {
  test('useBattery return right types.', () => {
    const { status, charging, time, label } = useBattery()
    expect(typeof status.value).toBe('number')
    expect(typeof charging.value === 'boolean' || charging.value === null).toBeTruthy()
    expect(typeof time.value).toBe('number')
    expect(typeof label.value).toBe('string')
  })

  test('useBattery can change value', () => {
    const { status, charging, time, label } = useBattery()

    const statusValue = 22
    const chargingValue = true
    const timeValue = 60
    const labelValue = '1 hour'

    status.value = statusValue
    charging.value = chargingValue
    time.value = timeValue
    label.value = labelValue

    expect(status.value).toBe(statusValue)
    expect(charging.value).toBe(chargingValue)
    expect(time.value).toBe(timeValue)
    expect(label.value).toBe(labelValue)
  })
})
