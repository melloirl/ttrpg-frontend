import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/enums/routes'
import RegisterView from '@/views/RegisterView.vue'
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
    {
      path: '/register',
      name: Routes.REGISTER,
      component: RegisterView,
    },
  ],
})

export default router
