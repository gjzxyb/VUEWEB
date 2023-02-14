import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/login/login.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/login.vue')
      }
    ]
    //meta: { requiresAuth: true },
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: []
    //meta: { requiresAuth: true },
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASEURL1),
  routes
})

export default router
