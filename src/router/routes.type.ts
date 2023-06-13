import type { QueryKey } from '@/http/queryKeys'
import { ExampleRoutes } from '@/modules/example/router/example.routes.type'

export enum GlobalRoutes {
  INDEX = 'index',
  MAIN = 'main',
  SIDEBAR = 'sidebar',
  COMPONENT = 'component',
}

export const routeNames = {
  ...GlobalRoutes,
  ...ExampleRoutes,
}

export interface Route {
  path: string
  component: () => Promise<unknown>
  children?: Route[]
  name?: typeof routeNames[keyof typeof routeNames]
  meta?: {
    prefetchRoutes?: QueryKey[]
  }
}
