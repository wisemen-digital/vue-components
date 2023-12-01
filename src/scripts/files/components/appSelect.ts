import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appSelect: Component = {
  component: ComponentName.APP_SELECT,
  name: 'AppSelect',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppFormSelect.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppSelect.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppSelectContainer.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppSelectInput.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppSelectOption.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/AppSelectOptions.vue',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/select/appSelect.style.ts',
      folder: 'select',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/select/useAppSelectContext.ts',
      folder: 'select',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/input/appInput.style.ts',
      folder: 'input',
    },
  ],
  dependencies: ['@headlessui/vue', '@headlessui-float/vue'],
  internalDependencies: [
    ComponentName.APP_FORM_ERROR,
    ComponentName.APP_TEXT,
    ComponentName.APP_FORM_LABEL,
  ],
}
