<script setup lang="ts">
import { useBattery } from '../../src/runtime/composables/useBattery'
const { status, charging, label, time } = useBattery()
</script>

<template>
  <div class="container">
    <div class="battery-container">
      <div class="battery-status">
        <div class="docs-prev-next">
          <nuxt-link href="/" class="prev">
            <span class="directory" />
            <span class="title-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="icon"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              <span class="title">Back to docs</span>
            </span>
          </nuxt-link>
        </div>
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
        <div>
          <h2>
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
    </div>
  </div>
</template>
<style>
.docs-prev-next {
  padding-bottom: 20px;
}
.docs-prev-next a {
  border: 1px solid var(--elements-border-primary-default);
  border-radius: var(--radii-lg);
  min-width: 0;
  padding: var(--space-3);
  position: relative;
}
.battery-container {
  margin: auto;
}
.battery-status {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.batteries > div {
  padding: 20px;
  width: 50%;
  margin: auto;
}
.batteries > div > h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
