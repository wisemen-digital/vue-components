import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appFormError: Component = {
  component: ComponentName.APP_FORM_ERROR,
  name: 'FormError',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/form-error/AppFormError.vue',
      folder: 'form-error',
    },
  ],
  internalDependencies: [
    ComponentName.TRANSITION_HEIGHT,
  ],
}
