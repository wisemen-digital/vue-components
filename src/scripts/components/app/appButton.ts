import componentInfo from '../../components'

export const appButton = {
  component: componentInfo.ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: componentInfo.ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    },
    {
      type: componentInfo.ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/appButtonVariants.ts',
      folder: 'app/buttons',
    },
  ],
  internalDependencies: [componentInfo.ComponentName.TRANSITIONS],
  dependencies: ['class-variance-authority'],
}
