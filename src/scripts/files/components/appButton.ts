import { ComponentName, ComponentType } from '../../componentsTypes'

export const appButton = {
  component: ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/button/AppButton.vue',
      folder: 'button',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/button/appButton.style.ts',
      folder: 'button',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/button/AppButtonIconOrLoader.vue',
      folder: 'button',
    },
  ],
  internalDependencies: [
    ComponentName.APP_LOADER,
  ],
}
