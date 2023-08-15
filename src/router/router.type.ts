import type { RouteRecordRaw } from 'vue-router'
import { ColorGeneratorRoutes } from '@/color-generator/router/colorGenerator.routes.type'

export enum GlobalRoutes {
}

export const ROUTES = {
  ...GlobalRoutes,
  ...ColorGeneratorRoutes,
}

export type Route = RouteRecordRaw & {
  name?: typeof ROUTES[keyof typeof ROUTES]
  children?: Route[]
}
