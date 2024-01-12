import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appRadioGroup: Component = {
  component: ComponentName.APP_RADIO_GROUP,
  name: 'RadioGroup',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroup.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppFormRadioGroup.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupContainer.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupDescription.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupIndicator.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupLabel.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupOption.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/AppRadioGroupOptions.vue',
      folder: 'radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/radio/appRadioGroup.style.ts',
      folder: 'radio',
    },
  ],
  dependencies: ['@headlessui/vue'],
  internalDependencies: [
    ComponentName.APP_FORM_ERROR,
    ComponentName.APP_TEXT,
    ComponentName.APP_FORM_LABEL,
  ],
}
