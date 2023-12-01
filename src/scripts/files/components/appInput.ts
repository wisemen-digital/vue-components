import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appInput: Component = {
  component: ComponentName.APP_INPUT,
  name: 'AppInput',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/AppInput.vue',
      folder: 'input',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/AppFormInput.vue',
      folder: 'input',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/AppFormTextarea.vue',
      folder: 'input',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/appInput.style.ts',
      folder: 'input',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/appTextarea.style.ts',
      folder: 'input',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/input.type.ts',
      folder: 'input',
    },
  ],
  internalDependencies: [
    ComponentName.APP_FORM_ERROR,
    ComponentName.APP_BUTTON,
    ComponentName.APP_FORM_LABEL,
    ComponentName.APP_TEXT,
  ],
}
