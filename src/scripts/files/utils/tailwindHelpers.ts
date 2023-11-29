import { ComponentName, ComponentType } from '../../componentsTypes'

export const utilsTailwindHelpers = {
  component: ComponentName.UTILS_TAILWIND_HELPERS,
  name: 'Tailwind Helpers',
  files: [
    {
      type: ComponentType.UTILS,
      path: './src/utils/tailwind/cva.ts',
      folder: 'tailwind',
    },
    {
      type: ComponentType.UTILS,
      path: './src/utils/tailwind/twMerge.ts',
      folder: 'tailwind',
    },
  ],
}
