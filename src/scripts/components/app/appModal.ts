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
      path: './src/components/app/modal/AppModalContent.vue',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalFooter.vue',
      folder: 'app/modal',

    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalHeader.vue',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalTitle.vue',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModalDescription.vue',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/appModal.style.ts',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModal.ts',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModalContext.ts',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/app/modal/useModal.type.ts',
      folder: 'app/modal',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/modal/AppModal.story.vue',
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
