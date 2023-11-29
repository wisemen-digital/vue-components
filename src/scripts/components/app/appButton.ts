import { ComponentName, ComponentType } from '../../componentsTypes'

export const appButton = {
  component: ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/button/AppButton.vue',
      folder: 'app/button',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/button/appButton.style.ts',
      folder: 'app/button',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/button/AppButtonLoader.vue',
      folder: 'app/button',
    },
  ],
  internalDependencies: [],
}
