import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appToast: Component = {
  component: ComponentName.APP_TOAST,
  name: 'Toast',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/toast/AppToast.vue',
      folder: 'toast',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/toast/appToast.style.ts',
      folder: 'toast',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/toast/AppToastContainer.vue',
      folder: 'toast',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/toast/useToast.vue',
      folder: 'toast',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/toast/useToastSwipe.vue',
      folder: 'toast',
    },

  ],
  internalDependencies: [ComponentName.APP_BUTTON, ComponentName.APP_LOADER],
  dependencies: ['vue-sonner'],
}
