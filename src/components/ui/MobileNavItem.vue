<template>
  <router-link :to="link" class="mobile-nav-item" :class="{'active': active}">
    <span class="mobile-nav-item__icon-wrapper">
      <base-svg :name="icon" :width="24" :height="24" :fill="iconFill" :stroke="iconFill" />
    </span>


    <p class="mobile-nav-item__text">
      {{name}}
    </p>
  </router-link>
</template>

<script setup lang="ts">

import BaseSvg from "@/components/base/BaseSvg.vue";
import {computed} from "vue";

interface IProps {
  name: string;
  link: string;
  icon: string;
  active: boolean;
}

const props = defineProps<IProps>()

const iconActive = computed(() => {
  return toString(props.icon + '-active')
})

const iconFill = computed(() => {
  return props.active ? '#FF7355' : '#87898F'
})
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.mobile-nav-item {
  width: 90px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  cursor: pointer;

  &.active, &:hover, &:focus {
    .mobile-nav-item {
      &__icon-wrapper {
        background: rgba($color--contrast--secondary, 0.25);
      }

      &__text {
        color: $color--contrast;
      }
    }
  }

  &__icon-wrapper {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 12px;
    transition: .15s all ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    @include fz-12-500;
    color: $light--text--color-text-secondary;
    transition: .15s all ease-in-out;
    text-align: center;
  }
}
</style>