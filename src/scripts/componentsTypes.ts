export enum ComponentName {
  APP_BUTTON = 'AppButton',
  APP_DROPDOWN_BUTTON = 'AppDropdownButton',
  APP_TOOLTIP = 'AppTooltip',
  APP_ICON = 'AppIcon',
  APP_TEXT = 'AppText',
  APP_MODAL = 'AppModal',
  APP_CARD = 'AppCard',
  APP_POPOVER = 'AppPopover',
  APP_FORM_LABEL = 'AppFormLabel',
  APP_INPUT = 'AppInput',
  APP_FORM_ERROR = 'AppFormError',
  APP_LOADER = 'AppLoader',
  APP_SELECT = 'AppSelect',
  APP_SWITCH = 'AppSwitch',
  APP_TABS = 'AppTabs',
  APP_TOAST = 'AppToast',
  APP_DATE_PICKER = 'AppDatePicker',

  TRANSITIONS = 'Transitions',
  TRANSITION_HEIGHT = 'TransitionHeight',
  ICONS = 'Icons',

  UTILS_GENERATE_UUID = 'UtilsGenerateUuid',
  UTILS_TAILWIND_HELPERS = 'UtilsTailwindHelpers',

  CONFIG_TAILWIND = 'TailwindConfig',
  CONFIG_PACKAGES = 'GlobalPackages',
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
  TYPES = 'types',
  TRANSITIONS = 'transitions',
  ICONS = 'icons',
  UTILS = 'utils',
  CONFIG = 'config',
  STYLES = 'styles',
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
