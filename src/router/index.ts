import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('@/components/core/login.vue'),
      path: '/',
      children: []
    }
  ]
})

export default router
