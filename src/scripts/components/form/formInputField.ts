import { ComponentName, ComponentType } from '../../componentsTypes'

export const formInputField = {
  component: ComponentName.FORM_INPUT_FIELD,
  name: 'FormInputField',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/form/field/FormInputField.vue',
      folder: 'form/field',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/form/field/formInputField.style.ts',
      folder: 'form/field',
    },
  ],
  internalDependencies: [
    ComponentName.FORM_ERROR,
    ComponentName.FORM_INPUT_GROUP_COMPOSABLE,
    ComponentName.TRANSITION_EXPAND,
    ComponentName.UTILS_GENERATE_UUID,
  ],
  dependencies: [
    '@vueuse/core',
  ],
}
