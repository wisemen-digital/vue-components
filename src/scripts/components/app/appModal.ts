import { ComponentName, ComponentType } from '../../componentsTypes'

export const appModal = {
  component: ComponentName.APP_MODAL,
  name: 'Modal',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModal.vue',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/appModal.style.ts',
      folder: 'app/modal',
    },
  ],
  dependencies: ['@headlessui/vue'],
  internalDependencies: [
    ComponentName.APP_TEXT,
    ComponentName.APP_BUTTON,
    ComponentName.APP_ICON,
  ],
}
