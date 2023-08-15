import { appButton } from './components/app/appButton'
import { appModal } from './components/app/appModal'
import { appText } from './components/app/appText'
import { appIcon } from './components/app/appIcon'

import { formError } from './components/form/formError'
import { formInputField } from './components/form/formInputField'
import { formInputGroupComposable } from './components/form/formInputGroupComposable'
import { transitionExpand } from './components/transitions/transitionExpand'
import type { Component } from './componentsTypes'
import { utilsGenerateUuid } from './components/utils/utilsGenerateUuid'

export const components: Component[] = [
  appButton,
  appModal,
  appText,
  appIcon,

  formError,
  formInputField,
  formInputGroupComposable,

  transitionExpand,
  utilsGenerateUuid,
]
