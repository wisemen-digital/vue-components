import { ComponentName, ComponentType } from '../../componentsTypes'

export const tailwindConfig = {
  component: ComponentName.CONFIG_TAILWIND,
  name: 'TailwindConfig',
  files: [
    {
      type: ComponentType.CONFIG,
      path: './tailwind.config.ts',
      folder: '',
    },
    {
      type: ComponentType.STYLES,
      path: './src/assets/styles/globals.css',
      folder: '',
    },
  ],
}
