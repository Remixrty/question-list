<template>
  <div class="mobile-nav">
    <mobile-nav-item
        v-for="item in navItems"
        :key="`${item.name}_${item.active}`"
        :name="item.name"
        :link="item.link"
        :icon="item.icon"
        :active="item.active"
    />
  </div>
</template>

<script setup lang="ts">

import {shallowRef} from "vue";
import {useRoute, useRouter} from "vue-router";
import MobileNavItem from "@/components/ui/MobileNavItem.vue";

const router = useRouter()
const route = useRoute()

const navItems = shallowRef([
  {
    name: 'Home',
    link: '/',
    icon: 'homeNav',
    active: route.path === '/'
  },
  {
    name: 'Your plan',
    link: '/your-plan',
    icon: 'planNav',
    active: route.path === '/your-plan'
  },
  {
    name: 'Leaderboard',
    link: '/leaderboard',
    icon: 'leaderboardNav',
    active: route.path === '/leaderboard'
  },
  {
    name: 'Profile',
    link: '/profile',
    icon: 'profileNav',
    active: route.path === '/profile'
  },
])
</script>

<style scoped lang="scss">
@import "@/assets/style/app";

.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  background-color: $light--background--color-background-content;
  border-radius: 24px 24px 0 0;
  padding: 8px 0;
  overflow: hidden;

  z-index: 3;
}
</style>