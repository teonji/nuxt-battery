<script setup lang="ts">
import { useBattery } from '../../src/runtime/composables/useBattery'
const { status, charging, label, time } = useBattery()
</script>

<template>
  <div class="container">
    <div class="battery-container">
      <div class="battery-status-text">
        <h2>Composable</h2>
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
        <div style="background-color: white">
          <h2 style="color: black">
            Default mode {{ '<battery-status />' }}
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
        <div>
          <h2>
            Dark mode {{ '<battery-status />' }}
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
        <div style="background-color: white">
          <h2 style="color: black">
            Default mode {{ '<battery-status-circle />' }}
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
        <div>
          <h2>
            Dark mode {{ '<battery-status-circle />' }}
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
  </div>
</template>
<style>
.battery-container {
  margin: auto;
}
.battery-status-text {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.batteries > div {
  padding: 20px;
  width: 50%;
  margin: auto;
}
h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
