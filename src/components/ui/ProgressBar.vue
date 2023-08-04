<template>
  <div class="progress-bar">
    <slot name="description">

    </slot>
    <div class="progress-bar__chart">
      <span v-for="(item, index) in Array(count)" :key="`${index}_progress`" :class="{'filled': index < computeCurrentBar}"></span>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

interface IProps {
  total: number;
  current: number;
  count?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  count: 7,
})

const computeCurrentBar = computed(() => {
  return parseInt((props.current / props.total) * props.count)
})

</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.progress-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  &__chart {
    display: flex;
    gap: 3px;

    span {
      height: 6px;
      border-radius: 5px;
      background-color: rgba($colorGreen, 0.1);
      width: 100%;

      &.filled {
        background-color: $colorGreen;
      }
    }
  }
}
</style>