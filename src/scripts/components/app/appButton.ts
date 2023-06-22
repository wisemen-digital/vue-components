import { ComponentName, ComponentType } from '../../componentsTypes'

export const appButton = {
  component: ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/appButtonVariants.ts',
      folder: 'app/buttons',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue',
      folder: 'app/buttons',
    },
  ],
  internalDependencies: [],
  dependencies: ['class-variance-authority'],
}
