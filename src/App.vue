<template>
  <main-layout>
    <RouterView />

    <mobile-nav />
  </main-layout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MobileNav from "@/components/ui/MobileNav.vue";
import MainLayout from "@/components/ui/MainLayout.vue";
import {onMounted} from "vue";
import {useQuestionStore} from "@/stores/questionStore";

const questionStore = useQuestionStore()
const { getQuestionList } = questionStore

onMounted(() => {
  getQuestionList()
})
</script>

<style scoped lang="scss">

</style>
