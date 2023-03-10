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
  <div
    class="battery-wrapper"
  >
    <div
      class="battery"
    >
      <div
        class="battery-level"
        data-testid="battery-level"
        :class="[style, {'not-colored': !colored}]"
        :style="{ height: `${status}%` }"
      />
      <span
        v-if="showPercentage && status >= 0"
        class="percentage"
        :class="[style, {'with-charging': charging, 'not-colored': !colored, dark}]"
      >
        {{ status }}
      </span>
      <svg
        v-if="charging"
        class="charging"
        :class="[style, {'with-percentage': showPercentage, 'not-colored': !colored, dark}]"
        width="14"
        height="14"
        viewBox="0 0 32 32"
      >
        <path
          class="charging-path"
          :class="style"
          fill="black"
          stroke="white"
          d="M17.927 12l2.68-10.28c0.040-0.126 0.060-0.261 0.060-0.4 0-0.726-0.587-1.32-1.314-1.32-0.413 0-0.78 0.187-1.019 0.487l-13.38 17.353c-0.18 0.227-0.287 0.513-0.287 0.827 0 0.733 0.6 1.333 1.333 1.333h8.073l-2.68 10.28c-0.041 0.127-0.060 0.261-0.060 0.4 0.001 0.727 0.587 1.32 1.314 1.32 0.413 0 0.78-0.186 1.020-0.487l13.379-17.353c0.181-0.227 0.287-0.513 0.287-0.827 0-0.733-0.6-1.333-1.333-1.333h-8.073z"
        />
      </svg>
    </div>
    <span
      v-if="status >= 0 && showLabel"
      class="battery-label"
      :class="{ dark }"
    >
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
}
.battery {
  box-sizing: initial;
  border: 3px solid v-bind(color);
  width: 18px;
  height: 30px;
  padding: 2px;
  border-radius: 4px;
  position: relative;
  margin: 3px 0;
}
.battery:before {
  content: '';
  height: 3px;
  width: 18px;
  background: v-bind(color);
  display: block;
  position: absolute;
  top: -6px;
  border-radius: 4px 4px 0 0;
}
.battery-label {
  margin-left: 12px;
  color: black;
}
.battery-label.dark {
  color: white;
}
.battery-level {
  background: #30b455;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.battery-level.not-colored {
  background: v-bind(color);
}
.percentage {
  width: 18px;
  text-align: center;
  position: absolute;
  z-index: 5;
  font-size: 11px;
  font-weight: bold;
  margin-top: 8px;
  color: black;
  text-shadow: -0.4px -0.4px 0 white, 0.4px -0.4px 0 white, -0.4px 0.4px 0 white, 0.4px 0.4px 0 white;
}
.percentage.dark {
  color: white;
  text-shadow: -0.4px -0.4px 0 black, 0.4px -0.4px 0 black, -0.4px 0.4px 0 black, 0.4px 0.4px 0 black;
}
.percentage.with-charging {
  margin-top: 16px;
}
.charging {
  position: absolute;
  margin-top: 8px;
  margin-left: 2px;
  z-index: 10;
}
.charging-path.dark {
  fill: white;
  stroke: black;
}
.charging.with-percentage {
  margin-top: 2px;
}
.charging-path.warn {
  fill: #efaf13;
}
.charging-path.alert {
  fill: #e81309;
}
.battery-level.warn {
  background-color: #efaf13;
}
.battery-level.alert {
  background-color: #e81309;
}
</style>
