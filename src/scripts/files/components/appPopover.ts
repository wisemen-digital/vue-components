import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appPopover: Component = {
  component: ComponentName.APP_POPOVER,
  name: 'Popover',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/popover/AppPopover.vue',
      folder: 'popover',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/float.type.ts',
      folder: '',
    },
  ],
  dependencies: ['@headlessui/vue', '@headlessui-float/vue'],
}
