import { computed } from 'vue'
import { Props } from '../utils/props'

export function useBatteryComponent (props: Props, status: number) {
  const color = computed<string>(() => props.dark ? 'white' : 'black')

  const style = computed<string>(() => {
    const dark = props.dark ? 'dark' : ''
    let color = ''
    if (status > 0) {
      if (props.colored) {
        switch (true) {
          case status <= 10:
            color = 'alert'
            break
          case status <= 25:
            color = 'warn'
            break
        }
      }
    }
    return `${dark} ${color}`.trim()
  })

  return {
    color,
    style
  }
}
