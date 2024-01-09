import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appLoader: Component = {
  component: ComponentName.APP_LOADER,
  name: 'Loader',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/loader/AppLoader.vue',
      folder: 'loader',
    },
  ],
}
