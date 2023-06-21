import { ComponentName, ComponentType } from '../../componentsTypes'

export const formInputField = {
  component: ComponentName.FORM_INPUT_FIELD,
  name: 'FormInputField',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/forms/field/FormInputField.vue',
      folder: 'forms/field',
    },
  ],
  internalDependencies: [
    ComponentName.FORM_ERROR,
    ComponentName.FORM_INPUT_GROUP_COMPOSABLE,
    ComponentName.TRANSITION_EXPAND,
  ],
}
