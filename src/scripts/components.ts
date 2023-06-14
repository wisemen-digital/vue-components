export enum ComponentName {
  APP_BUTTON = 'AppButton',
  APP_DROPDOWN_BUTTON = 'AppDropdownButton',
  APP_TOOLTIP = 'AppTooltip',
  FORM_INPUT_FIELD = 'FormInputField',
  FORM_ERROR = 'FormError',
  FORM_INPUT_GROUP_COMPOSABLE = 'FormInputGroupComposable',
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
}

export interface ComponentFile {
  type: ComponentType
  path: string
  folder: string
}

export interface Component {
  component: ComponentName
  name: string
  files: ComponentFile[]
  dependencies?: string[]
  internalDependencies?: ComponentName[]
}

export const components: Component[] = [
  {
    component: ComponentName.APP_BUTTON,
    name: 'Button',
    files: [{
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/buttons/app-button/AppButton.vue',
      folder: 'app/buttons',
    }],
    dependencies: [],
  },
  {
    component: ComponentName.APP_DROPDOWN_BUTTON,
    name: 'DropdownButton',
    files: [
      {
        type: ComponentType.COMPONENTS,
        path: './src/modules/ui/components/app/buttons/app-dropdown-button/AppDropdownButton.vue',
        folder: 'app/buttons',
      },
    ],
    dependencies: ['@headlessui-float/vue', '@headlessui/vue'],
    internalDependencies: [ComponentName.APP_BUTTON],
  },
  {
    component: ComponentName.APP_TOOLTIP,
    name: 'Tooltip',
    files: [{
      type: ComponentType.COMPONENTS,
      path: './src/modules/ui/components/app/tooltip/AppTooltip.vue',
      folder: 'app/tooltip',
    }],
    dependencies: ['@floating-ui/dom', '@vueuse/core'],
  },

  {
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
    ],
  },
  {
    component: ComponentName.FORM_ERROR,
    name: 'FormError',
    files: [
      {
        type: ComponentType.COMPONENTS,
        path: './src/modules/ui/components/forms/error/FormError.vue',
        folder: 'forms/errors',
      },
    ],
  },
  {
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
  },
]
