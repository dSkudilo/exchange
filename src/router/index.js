import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('@/pages/IndexPage'),
    },
    {
      path: '/order-book',
      name: 'orderBook',
      component: () => import('@/pages/OrderBook'),
    },
  ]
})

console.log(router, '12312312')

export default router
