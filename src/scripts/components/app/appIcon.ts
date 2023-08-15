import { ComponentName, ComponentType } from '../../componentsTypes'

export const appButton = {
  component: ComponentName.APP_BUTTON,
  name: 'Button',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/icon/AppIcon.vue',
      folder: 'app/icon',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/icon/appIcon.style.ts',
      folder: 'app/icon',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue',
      folder: 'app/icon',
    },
  ],
  internalDependencies: [],
}
