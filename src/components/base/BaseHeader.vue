<template>
  <div class="base-header">
    <div class="base-header__left">
      <back-button @click="goBack" v-if="isBack" />
      <h1 class="base-header__title">
        {{title}}
      </h1>
    </div>
    <div class="base-header__right">
      <slot name="right">

      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackButton from "@/components/ui/BackButton.vue";
import {useRouter} from "vue-router";

interface IProps {
  title: string;
  isBack?: boolean;
}

defineProps<IProps>()

const router = useRouter()

const goBack = async () => {
  await router.go(-1)
}
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;

  &__title {
    @include fz-18-500;
  }

  &__left {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>