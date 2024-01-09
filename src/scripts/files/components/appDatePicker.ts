import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appDatePicker: Component = {
  component: ComponentName.APP_DATE_PICKER,
  name: 'AppDatePicker',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/datepicker/AppDatePicker.vue',
      folder: 'datepicker',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/datepicker/AppDateSelector.vue',
      folder: 'datepicker',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/datepicker/AppFormDatePicker.vue',
      folder: 'datepicker',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/datePicker.type.ts',
      folder: '',
    },
  ],
  internalDependencies: [
    ComponentName.APP_INPUT,
    ComponentName.APP_TEXT,
  ],
  dependencies: ['@vuepic/vue-datepicker'],
}
