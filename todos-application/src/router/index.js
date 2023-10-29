import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/archive',
      name: 'ArchivePage',
      component: () => import('../views/ArchivePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutPage.vue')
    }
  ]
})

export default router
