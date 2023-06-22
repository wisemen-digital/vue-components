export enum ComponentName {
  APP_BUTTON = 'AppButton',
  APP_DROPDOWN_BUTTON = 'AppDropdownButton',
  APP_TOOLTIP = 'AppTooltip',
  APP_ICON = 'AppIcon',
  APP_TEXT = 'AppText',
  APP_MODAL = 'AppModal',

  FORM_INPUT_FIELD = 'FormInputField',
  FORM_ERROR = 'FormError',
  FORM_INPUT_GROUP_COMPOSABLE = 'FormInputGroupComposable',

  TRANSITIONS = 'Transitions',
  TRANSITION_EXPAND = 'TransitionExpand',
  ICONS = 'Icons',
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
  TRANSITIONS = 'transitions',
  ICONS = 'icons',
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