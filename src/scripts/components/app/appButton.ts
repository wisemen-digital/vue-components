import { ComponentName, ComponentType } from '@/scripts/components'

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
  ],
  internalDependencies: [ComponentName.TRANSITIONS],
  dependencies: ['class-variance-authority'],
}
