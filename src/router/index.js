import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuPage.vue'),
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/HistoryPage.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('../views/WalletPage.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/SettingPage.vue')
  },
  {
    path: '/:matchAll(.*)',
    redirect: 'menu'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
