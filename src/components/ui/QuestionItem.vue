<template>
  <div class="question" @click="checkQuestion">
    {{ questionNumber }}
    <span class="question__pass-wrapper" v-if="is_passed">
      <base-svg name="check-circle" :width="24" :height="24" />
    </span>
    <span class="question__shadow-wrapper">
      <base-svg name="semi-shadow" :width="62.723" :height="62.723" />
    </span>
  </div>
</template>

<script setup lang="ts">
import BaseSvg from "@/components/base/BaseSvg.vue";

interface IProps {
  id: number;
  questionNumber: number;
  is_passed: boolean;
}

const props = defineProps<IProps>()
const emit = defineEmits(['trigger:checkQuestion'])

const checkQuestion = () => {
  emit('trigger:checkQuestion', props.id)
}
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.question {
  width: 71px;
  height: 71px;
  border-radius: 100%;
  background-color: $light--background--color-background-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: .3s all ease;

  @include fz-18-500;
  font-weight: 400;

  &:focus, &:hover, &:active {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
  }

  &__pass-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  &__shadow-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 62.723px;
    height: 62.723px;
    z-index: 1;
  }
}
</style>