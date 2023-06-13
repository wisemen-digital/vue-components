import { createRouter, createWebHistory } from 'vue-router'
import type { Component } from 'vue'
import type { Route } from './routes.type'
import { routeNames } from './routes.type'
import exampleRouter from '@/modules/example/router/example.router'

export const routes: Route[] = [
  {
    path: '/',
    component: (): Promise<Component> => import('../layouts/Main.vue'),
    name: routeNames.MAIN,
    children: [
      {
        component: (): Promise<Component> => import('../pages/Index.vue'),
        name: routeNames.INDEX,
        path: '',
      },
      {
        component: (): Promise<Component> => import('../pages/ComponentView.vue'),
        name: routeNames.COMPONENT,
        path: 'component/:componentName',
      },

      ...exampleRouter,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
