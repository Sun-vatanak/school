import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Homepage.vue'
import CustomerView from '@/views/CustomerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView,
    }
  ],
})

export default router
