import { createRouter, createWebHistory } from 'vue-router'
import SrmView from '../views/SrmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'srm',
      component: SrmView,
    }
  ],
})

export default router
