import { ref, onMounted, onUnmounted } from 'vue'

interface BatteryManager {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
  addEventListener: Function,
  removeEventListener: Function,
}

export interface useBatteryType {
  status: number
  charging: boolean | null
  time: number
  label: string
}
/**
 * useBattery composable
 *
 * @returns useBatteryType
 */
export function useBattery () {
  let battery: BatteryManager | null = null

  const status = ref<number>(-1)
  const charging = ref<boolean | null>(null)
  const time = ref<number>(-1)
  const label = ref<string>('')

  /**
   * Convert minutes in a formatted string with hour and minutes
   * @param {number} val
   * @returns {string}
   */
  const timeConvert = (val: number) => {
    const hours: number = val / 60
    const rHours: number = Math.floor(hours)
    const minutes: number = (hours - rHours) * 60
    const rMinutes: number = Math.round(minutes)
    const sHours = `${rHours > 0 ? `${rHours} hour${rHours > 1 ? 's' : ''}` : ''}`
    const sMinutes = `${rMinutes > 0 ? `${rMinutes} minute${rMinutes > 1 ? 's' : ''}` : ''}`
    return `${sHours} ${sMinutes}`.trim()
  }

  /**
   * Update level info battery
   */
  const updateLevel = () => {
    status.value = parseInt(String((battery?.level || 0) * 100))
  }
  /**
   * Update charge info
   */
  const updateCharge = () => {
    charging.value = battery?.charging || false
  }
  /**
   * Update discharging info
   */
  const updateDischarging = () => {
    time.value = battery?.dischargingTime ? battery?.dischargingTime / 60 : 0
    label.value = time.value ? timeConvert(time.value) : ''
  }
  /**
   * Update all battery info
   */
  const updateBatteryInfo = () => {
    updateCharge()
    updateLevel()
    updateDischarging()
  }

  onMounted(async () => {
    try {
      // @ts-ignore
      battery = await navigator.getBattery()
      if (battery) {
        updateBatteryInfo()
        battery.addEventListener('chargingchange', updateBatteryInfo)
        battery.addEventListener('levelchange', updateBatteryInfo)
        battery.addEventListener('dischargingtimechange', updateBatteryInfo)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\'t access to navigator.getBattery() API.')
    }
  })
  onUnmounted(() => {
    try {
      if (battery) {
        battery.removeEventListener('chargingchange', updateBatteryInfo)
        battery.removeEventListener('levelchange', updateBatteryInfo)
        battery.removeEventListener('dischargingtimechange', updateBatteryInfo)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\'t access to navigator.getBattery() API.')
    }
  })
  return {
    status,
    charging,
    time,
    label
  }
}
