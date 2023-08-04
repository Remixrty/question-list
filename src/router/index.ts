import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from "@/views/MainMenu.vue";
import QuestionsList from "@/views/QuestionsList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainMenu,
    },
    {
      path: '/list',
      name: 'list',
      component: QuestionsList,
    }
  ]
})

export default router
