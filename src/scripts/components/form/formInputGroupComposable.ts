import { ComponentName, ComponentType } from '../../componentsTypes'

export const formInputGroupComposable = {
  component: ComponentName.FORM_INPUT_GROUP_COMPOSABLE,
  name: 'FormInputGroupComposable',
  files: [
    {
      type: ComponentType.COMPOSABLES,
      path: './src/modules/ui/composables/forms/group/useFormInputGroup.ts',
      folder: 'forms/group',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/modules/ui/composables/forms/group/useFormInputGroupContext.ts',
      folder: 'forms/group',
    },
  ],
}
