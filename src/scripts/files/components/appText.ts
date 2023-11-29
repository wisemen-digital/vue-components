import { ComponentName, ComponentType } from '../../componentsTypes'

export const appText = {
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
  ],
  internalDependencies: [],
}
