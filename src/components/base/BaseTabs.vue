<template>
  <div class="tabs">
    <div class="tabs__items">
      <span v-for="(tab, index) in tabList" :class="{'active': index === activeIndex}" :key="`${tab}_${index}`" @click="changeActiveTab(tab)" @focus="changeActiveTab(tab)">
        {{ tab }}
      </span>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

interface IProps {
  tabList: string[];
  activeTab?: string;
}

const props = defineProps<IProps>()
const emit = defineEmits(['update:activeTab'])

const activeIndex = computed(() => {
  return props.tabList.findIndex(item => item === props.activeTab) ?? 0
})

const changeActiveTab = (tab) => {
  emit('update:activeTab', tab)
}
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.tabs {
  display: flex;
  flex-direction: column;
  gap: 26px;

  &__items {
    width: max-content;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 16px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      height: 0;
    }

    span {
      @include fz-14-400;
      font-weight: 500;
      padding: 14px 36px;
      position: relative;
      color: $light--text--color-text-secondary;

      &.active {
        color: $color--contrast;

        &:after {
          content: '';
          height: 2px;
          border: 1px solid $color--contrast;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>