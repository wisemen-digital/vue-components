import { createRouter, createWebHistory } from 'vue-router'
import { colorGeneratorRoutes } from '@/color-generator/router/colorGenerator.router'
import type { Route } from '@/router/router.type'

export const routes: Route[] = [
  ...colorGeneratorRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
