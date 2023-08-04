<template>
  <component :is="iconSrc" :style="styleComputed" :class="[className, `svg-icon--${name}`]" class="svg-icon" />
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";

interface IProps {
  name: string;
  width?: string | number;
  height?: string | number;
  custom?: object;
  title?: string;
  fill?: string;
  stroke?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  width: null,
  height: null,
  custom: () => {},
  title: '',
  fill: '',
  string: '',
})

const iconSrc = ref()

const className = computed(() => {
  return [
    { 'svg-icon_fill': props.fill },
    { 'svg-icon_stroke': props.stroke }
  ]
})


const styleComputed = computed(() => {
  const width = props.width ? `width: ${props.width}px;` : '';
  const height = props.height ? `height: ${props.height}px;` : '';
  return width + height;
})

const fillStyle = computed(() => {
  return props.fill || 'currentColor'
})

const strokeStyle = computed(() => {
  return props.stroke || 'currentColor'
})

watch(() => props.name,
    async (newVal) => {
      iconSrc.value = await import(/* @vite-ignore */ `/src/assets/icons/${newVal}.svg`)
    })

onMounted(async () => {
  iconSrc.value = await import(/* @vite-ignore */ `/src/assets/icons/${props.name}.svg`)
})
</script>

<style lang="scss">
.svg-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: inherit;
  vertical-align: middle;

  &_fill {
    path {
      fill: v-bind(fillStyle);
    }
  }

  &_stroke {
    path {
      stroke: v-bind(strokeStyle)
    }
  }

}

.svg-up {
  /* default */
  transform: rotate(0deg);
}

.svg-right {
  transform: rotate(90deg);
}

.svg-down {
  transform: rotate(180deg);
}

.svg-left {
  transform: rotate(-90deg);
}
</style>
