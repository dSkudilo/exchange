export const routes = [
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
