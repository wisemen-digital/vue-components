import { ComponentName, ComponentType } from '../../componentsTypes'

export const appModal = {
  component: ComponentName.APP_MODAL,
  name: 'Modal',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModal.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalContent.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalFooter.vue',
      folder: 'modal',

    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalHeader.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalTitle.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalDescription.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/appModal.style.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModal.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModalContext.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModal.type.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModal.story.vue',
      folder: 'modal',
    },
  ],
  dependencies: ['@headlessui/vue'],
  internalDependencies: [
    ComponentName.APP_TEXT,
    ComponentName.APP_BUTTON,
    ComponentName.APP_ICON,
  ],
}
