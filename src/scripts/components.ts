import { appButton } from './components/app/appButton'
import { appButtonDropdown } from './components/app/appButtonDropdown'
import { appTooltip } from './components/app/appTooltip'
import { formError } from './components/form/formError'
import { formInputField } from './components/form/formInputField'
import { formInputGroupComposable } from './components/form/formInputGroupComposable'
import { transitionExpand } from './components/transitions/transitionExpand'
import { transitions } from './components/transitions/transtitions'

export enum ComponentName {
  APP_BUTTON = 'AppButton',
  APP_DROPDOWN_BUTTON = 'AppDropdownButton',
  APP_TOOLTIP = 'AppTooltip',
  FORM_INPUT_FIELD = 'FormInputField',
  FORM_ERROR = 'FormError',
  FORM_INPUT_GROUP_COMPOSABLE = 'FormInputGroupComposable',
  TRANSITIONS = 'Transitions',
  TRANSITION_EXPAND = 'TransitionExpand',
}

export enum ComponentType {
  COMPONENTS = 'components',
  COMPOSABLES = 'composables',
  TRANSITIONS = 'transitions',
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
  appButton,
  appButtonDropdown,
  appTooltip,
  formError,
  formInputField,
  formInputGroupComposable,
  transitionExpand,
  transitions,
]
