import { ComponentName, ComponentType } from '../../componentsTypes'

export const appRadio = {
  component: ComponentName.APP_RADIO,
  name: 'Text',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/radio/AppRadioGroup.vue',
      folder: 'app/radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/radio/AppRadioOption.vue',
      folder: 'app/radio',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/app/radio/appRadio.style.ts',
      folder: 'app/radio',
    },
  ],
  dependencies: ['@headlessui/vue'],
  internalDependencies: [],
}
