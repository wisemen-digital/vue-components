import { appButton } from './components/app/appButton'
import { appButtonDropdown } from './components/app/appButtonDropdown'
import { appTooltip } from './components/app/appTooltip'
import { formError } from './components/form/formError'
import { formInputField } from './components/form/formInputField'
import { formInputGroupComposable } from './components/form/formInputGroupComposable'
import { transitionExpand } from './components/transitions/transitionExpand'
import { transitions } from './components/transitions/transtitions'
import type { Component } from './componentsTypes'

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
