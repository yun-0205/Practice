import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/settings',
          name: 'settings',
          components: () => import('../pages/Settings.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/ErrorNotFound.vue')
    },
  ],
})

export default router