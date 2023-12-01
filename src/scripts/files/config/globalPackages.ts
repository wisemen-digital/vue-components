import { ComponentName } from '../../componentsTypes'

export const globalPackages = {
  component: ComponentName.CONFIG_PACKAGES,
  name: 'PackagesConfig',
  files: [],
  dependencies: [
    'tailwindcss',
    'formango',
    'cva',
    'tailwind-merge',
    'zod',
  ],
}
