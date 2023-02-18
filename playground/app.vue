<template>
  <div>
    <div>
      <p>
        Status: {{ status }}%
      </p>
      <p>
        Is under charging: {{ charging }}
      </p>
      <p>
        Remaining time ({{ time }}): {{ label }}
      </p>
    </div>
    <div class="batteries">
      <div>
        <h2>
          Default mode
        </h2>
        <battery-status />
        <battery-status show-percentage />
        <battery-status show-label />
        <battery-status show-percentage show-label />
        <battery-status :colored="false" />
        <battery-status :colored="false" show-percentage />
        <battery-status :colored="false" show-label />
        <battery-status :colored="false" show-percentage show-label />
      </div>
      <div style="background-color: black">
        <h2 style="color: white">
          Dark mode
        </h2>
        <battery-status dark />
        <battery-status dark show-percentage />
        <battery-status dark show-label />
        <battery-status dark show-percentage show-label />
        <battery-status dark :colored="false" />
        <battery-status dark :colored="false" show-percentage />
        <battery-status dark :colored="false" show-label />
        <battery-status dark :colored="false" show-percentage show-label />
      </div>
    </div>
    <div class="batteries">
      <div>
        <h2>
          Default mode
        </h2>
        <battery-status-circle />
        <battery-status-circle show-percentage />
        <battery-status-circle show-label />
        <battery-status-circle show-percentage show-label />
        <battery-status-circle :colored="false" />
        <battery-status-circle :colored="false" show-percentage />
        <battery-status-circle :colored="false" show-label />
        <battery-status-circle :colored="false" show-percentage show-label />
      </div>
      <div style="background-color: black">
        <h2 style="color: white">
          Dark mode
        </h2>
        <battery-status-circle dark />
        <battery-status-circle dark show-percentage />
        <battery-status-circle dark show-label />
        <battery-status-circle dark show-percentage show-label />
        <battery-status-circle dark :colored="false" />
        <battery-status-circle dark :colored="false" show-percentage />
        <battery-status-circle dark :colored="false" show-label />
        <battery-status-circle dark :colored="false" show-percentage show-label />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBattery } from '../src/runtime/composables/useBattery'
const { status, charging, label, time } = useBattery()
</script>

<style>
.batteries {
  display: flex;
}
.batteries > div {
  padding: 20px;
  width: 50%;
}
.batteries > div > h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
