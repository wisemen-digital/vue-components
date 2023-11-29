import { ComponentName, ComponentType } from '../../componentsTypes'

export const appFormLabel = {
  component: ComponentName.APP_FORM_LABEL,
  name: 'FormLabel',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/form-label/AppFormLabel.vue',
      folder: 'form-label',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/form-label/appFormLabel.style.ts',
      folder: 'form-label',
    },
  ],
}
