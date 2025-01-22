import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'discover' },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('@/views/discover/index.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/videopage/index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/searchPage/index.vue')
    }
  ]
})

export default router
