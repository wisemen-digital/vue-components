import { ComponentName, ComponentType } from '../../componentsTypes'

export const appIcon = {
  component: ComponentName.APP_ICON,
  name: 'Icon',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/icon/AppIcon.vue',
      folder: 'app/icon',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/icon/appIcon.style.ts',
      folder: 'app/icon',
    },
  ],
  internalDependencies: [],
}
