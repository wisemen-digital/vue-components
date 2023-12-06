import { ComponentName, ComponentType } from '../../componentsTypes'

export const appIcon = {
  component: ComponentName.APP_ICON,
  name: 'Icon',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/icon/AppIcon.vue',
      folder: 'icon',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/icon/appIcon.style.ts',
      folder: 'icon',
    },
  ],
  internalDependencies: [],
}
