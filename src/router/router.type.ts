import type { RouteRecordRaw } from 'vue-router'
import { ColorGeneratorRoutes } from '@/color-generator/router/colorGenerator.routes.type'

export enum GlobalRoutes {
  TAB1 = 'Tab1',
  TAB2 = 'Tab2',
  TAB3 = 'Tab3',
}

export const ROUTES = {
  ...GlobalRoutes,
  ...ColorGeneratorRoutes,
}

export type Route = RouteRecordRaw & {
  name?: typeof ROUTES[keyof typeof ROUTES]
  children?: Route[]
}
