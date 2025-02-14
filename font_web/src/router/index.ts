import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'video' },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/videopage/index.vue')
    }
  ]
})

export default router
