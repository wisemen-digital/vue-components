import { ComponentName, ComponentType } from '../../componentsTypes'

export const formInputGroupComposable = {
  component: ComponentName.FORM_INPUT_GROUP_COMPOSABLE,
  name: 'FormInputGroupComposable',
  files: [
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/form/group/useFormInputGroup.ts',
      folder: 'form/group',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/form/group/useFormInputGroupContext.ts',
      folder: 'form/group',
    },
  ],
}
