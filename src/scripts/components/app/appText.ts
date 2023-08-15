import { ComponentName, ComponentType } from '../../componentsTypes'

export const appText = {
  component: ComponentName.APP_TEXT,
  name: 'Text',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/text/AppText.vue',
      folder: 'app/text',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/text/appText.style.ts',
      folder: 'app/text',
    },
  ],
  internalDependencies: [],
}
