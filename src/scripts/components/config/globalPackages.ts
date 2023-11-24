import { ComponentName } from '../../componentsTypes'

export const globalPackages = {
  component: ComponentName.CONFIG_PACKAGES,
  name: 'PackagesConfig',
  files: [],
  dependencies: [
    'tailwindcss',
    '@appwise/forms',
    'class-variance-authority',
    'tailwind-merge',
    'zod',
  ],
}
