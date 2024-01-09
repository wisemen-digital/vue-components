import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appText: Component = {
  component: ComponentName.APP_TEXT,
  name: 'Text',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/text/AppText.vue',
      folder: 'text',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/text/appText.style.ts',
      folder: 'text',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/text/AppTextDescription.vue',
      folder: 'text',
    },
  ],
  internalDependencies: [],
}
