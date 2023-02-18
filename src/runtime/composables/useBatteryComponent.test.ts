import { describe, expect, test } from '@jest/globals'
import { Props } from '../utils/props'
import { useBatteryComponent } from './useBatteryComponent'

describe('useBatteryComponent composable', () => {
  test('useBatteryComponent test color computed', () => {
    const props: Props = {
      showLabel: false,
      showPercentage: false,
      dark: false,
      colored: true
    }
    const { color } = useBatteryComponent(props, 100)
    expect(color.value).toBe('black')

    props.dark = true
    const { color: color2 } = useBatteryComponent(props, 100)
    expect(color2.value).toBe('white')
  })
  test('useBatteryComponent test style computed', () => {
    const props: Props = {
      showLabel: false,
      showPercentage: false,
      dark: false,
      colored: true
    }
    const { style } = useBatteryComponent(props, 100)
    expect(style.value).toBe('')

    const { style: style2 } = useBatteryComponent(props, 20)
    expect(style2.value).toBe('warn')

    const { style: style3 } = useBatteryComponent(props, 10)
    expect(style3.value).toBe('alert')

    props.dark = true
    const { style: style4 } = useBatteryComponent(props, 100)
    expect(style4.value).toBe('dark')

    const { style: style5 } = useBatteryComponent(props, 20)
    expect(style5.value).toBe('dark warn')

    const { style: style6 } = useBatteryComponent(props, 10)
    expect(style6.value).toBe('dark alert')
  })
})
