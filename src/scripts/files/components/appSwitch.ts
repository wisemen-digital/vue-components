import { ComponentName, ComponentType } from '../../componentsTypes'

export const appSwitch = {
  component: ComponentName.APP_SWITCH,
  name: 'Switch',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppSwitch.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppFormSwitch.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppFormIndicator.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppSwitchContainer.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppSwitchDescription.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/AppSwitchLabel.vue',
      folder: 'switch',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/switch/appSwitch.style.ts',
      folder: 'switch',
    },

  ],
  internalDependencies: [
    ComponentName.APP_FORM_ERROR,
    ComponentName.APP_FORM_LABEL,
    ComponentName.APP_TEXT,
  ],
}
