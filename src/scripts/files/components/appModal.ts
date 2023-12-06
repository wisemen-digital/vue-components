import { ComponentName, ComponentType } from '../../componentsTypes'

export const appModal = {
  component: ComponentName.APP_MODAL,
  name: 'Modal',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModal.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModalContent.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModalFooter.vue',
      folder: 'modal',

    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModalHeader.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModalTitle.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModalDescription.vue',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/appModal.style.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/modal/useModal.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/modal/useModalContext.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/useModal.type.ts',
      folder: 'modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/modal/AppModal.story.vue',
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
