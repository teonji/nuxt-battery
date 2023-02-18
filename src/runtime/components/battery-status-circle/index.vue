<script lang="ts">
import props, { Props } from '../../utils/props'
import { useBattery } from '../../composables/useBattery'
import { useBatteryComponent } from '../../composables/useBatteryComponent'

export default {
  props,
  setup (props: Props) {
    const { status, charging, label } = useBattery()
    const { color, style } = useBatteryComponent(props, status.value)
    return {
      status,
      charging,
      label,
      color,
      style
    }
  }
}
</script>

<template>
  <div class="battery-wrapper">
    <span class="battery-status">
      <span v-if="showPercentage">{{ status }}</span>
      <svg
        v-if="charging"
        class="charging"
        :class="style"
        width="14"
        height="14"
        viewBox="0 0 32 32"
      >
        <path
          :fill="color"
          d="M17.927 12l2.68-10.28c0.040-0.126 0.060-0.261 0.060-0.4 0-0.726-0.587-1.32-1.314-1.32-0.413 0-0.78 0.187-1.019 0.487l-13.38 17.353c-0.18 0.227-0.287 0.513-0.287 0.827 0 0.733 0.6 1.333 1.333 1.333h8.073l-2.68 10.28c-0.041 0.127-0.060 0.261-0.060 0.4 0.001 0.727 0.587 1.32 1.314 1.32 0.413 0 0.78-0.186 1.020-0.487l13.379-17.353c0.181-0.227 0.287-0.513 0.287-0.827 0-0.733-0.6-1.333-1.333-1.333h-8.073z"
        />
      </svg>
    </span>
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path class="circle" :class="[style, {[color]: !colored}]" :stroke-dasharray="`${status}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
    </svg>
    <span v-if="showLabel" class="battery-label">
      <span v-if="showPercentage">{{ status }}% - </span>
      <span v-if="!charging">{{ label }}</span>
      <span v-else>On charging</span>
    </span>
  </div>
</template>

<style scoped>
.battery-wrapper {
  display: flex;
  align-items: center;
  font-family: sans-serif;
  color: v-bind(color);
}
.battery-status {
  position: absolute;
  font-size: 12px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 7px;
}
.battery-label {
  margin-left: 4px;
}
.circular-chart {
  display: block;
  max-width: 80%;
  max-height: 40px;
}
.circle {
  stroke: #30b455;
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
}
.circle.warn {
  stroke: #efaf13;
}
.circle.alert {
  stroke: #e81309;
}
.circle.black,
.circle.white {
  stroke: v-bind(color);
}
</style>
