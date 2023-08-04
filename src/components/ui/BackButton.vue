<template>
  <div class="back-button">
    <base-svg name="back" :height="24" :width="24" />
  </div>
</template>

<script setup lang="ts">
import BaseSvg from "@/components/base/BaseSvg.vue";
</script>

<style scoped lang="scss">
.back-button {
  cursor: pointer;
}
</style>