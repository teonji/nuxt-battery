import { ref, onMounted, onUnmounted } from 'vue'

export interface UseBatteryData {
  status: string
  charging: boolean
  time: number
  label: string
}
/*
* @return UseBatteryData
* */
export function useBattery () {
  let battery: any = null

  const status = ref(-1)
  const charging = ref(null)
  const time = ref(-1)
  const label = ref('')

  const timeConvert = (val: number) => {
    const hours = val / 60
    const rHours = Math.floor(hours)
    const minutes = (hours - rHours) * 60
    const rMinutes = Math.round(minutes)
    return `${rHours > 0 ? `${rHours} hour${rHours > 1 ? 's' : ''}` : ''} ${rMinutes > 0 ? `${rMinutes} minute${rMinutes > 1 ? 's' : ''}` : ''}`.trim()
  }

  const updateLevelInfo = () => {
    status.value = parseInt(String(battery?.level * 100))
  }
  const updateChargeInfo = () => {
    charging.value = battery?.charging
  }
  const updateDischargingInfo = () => {
    time.value = battery?.dischargingTime / 60
    label.value = time.value ? timeConvert(time.value) : ''
  }
  const updateAllBatteryInfo = () => {
    updateChargeInfo()
    updateLevelInfo()
    updateDischargingInfo()
  }

  onMounted(() => {
    try {
      // @ts-ignore
      navigator.getBattery().then((b: any) => {
        battery = b
        updateAllBatteryInfo()
        battery.addEventListener('chargingchange', updateAllBatteryInfo)
        battery.addEventListener('levelchange', updateAllBatteryInfo)
        battery.addEventListener('dischargingtimechange', updateAllBatteryInfo)
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\' access to navigator.getBattery() API.')
    }
  })
  onUnmounted(() => {
    try {
      // @ts-ignore
      battery.removeEventListener('chargingchange', updateAllBatteryInfo)
      battery.removeEventListener('levelchange', updateAllBatteryInfo)
      battery.removeEventListener('dischargingtimechange', updateAllBatteryInfo)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Can\' access to navigator.getBattery() API.')
    }
  })
  return {
    status,
    charging,
    time,
    label
  }
}
