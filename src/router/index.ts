import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/enums/routes'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: HomeView,
    },
    {
      path: '/about',
      name: Routes.ABOUT,
      component: HomeView,
    },
  ],
})

export default router
