import { createRouter, createWebHistory } from 'vue-router'
import { colorGeneratorRoutes } from '@/color-generator/router/colorGenerator.router'
import { ROUTES, type Route } from '@/router/router.type'

export const routes: Route[] = [
  {
    name: ROUTES.TAB1,
    path: '/tab1',
    component: () => import('./TabTest.vue'),
  },
  {
    name: ROUTES.TAB2,
    path: '/tab2',
    component: () => import('./TabTest.vue'),
  },
  {
    name: ROUTES.TAB3,
    path: '/tab3',
    component: () => import('./TabTest.vue'),
  },

  ...colorGeneratorRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
