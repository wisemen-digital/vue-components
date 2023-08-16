import type { Route } from '@/router/router.type'
import { ROUTES } from '@/router/router.type'

export const colorGeneratorRoutes: Route[] = [
  {
    name: ROUTES.COLOR_GENERATOR_INDEX,
    path: '/',
    component: () => import('../views/ColorGeneratorView.vue'),
  },
]
