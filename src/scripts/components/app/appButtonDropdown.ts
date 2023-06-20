import { ComponentName, ComponentType } from '../../components'

export const appButtonDropdown = {
  component: ComponentName.APP_DROPDOWN_BUTTON,
  name: 'DropdownButton',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.vue',
      folder: 'app/buttons',
    },
  ],
  dependencies: ['@headlessui-float/vue', '@headlessui/vue'],
  internalDependencies: [ComponentName.APP_BUTTON, ComponentName.TRANSITIONS],
}
