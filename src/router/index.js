import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/mainLayout.vue'),
      children: [
        {
          path: '/settings',
          name: 'settings',
          components: () => import('../pages/settings.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/errorNotFound.vue')
    },
  ],
})

export default router