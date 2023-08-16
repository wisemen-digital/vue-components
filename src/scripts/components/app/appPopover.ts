import { ComponentName, ComponentType } from '../../componentsTypes'

export const appPopover = {
  component: ComponentName.APP_POPOVER,
  name: 'Popover',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/popover/AppPopover.vue',
      folder: 'app/popover',
    },
  ],
  dependencies: ['@headlessui/vue', '@headlessui-float/vue'],
}
