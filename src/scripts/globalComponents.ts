import { icons } from './files/icons/icons'
import { transitions } from './files/transitions/transtitions'
import { utilsTailwindHelpers } from './files/utils/tailwindHelpers'
import type { Component } from './componentsTypes'
import { utilsGenerateUuid } from './files/utils/utilsGenerateUuid'

export const globalComponents: Component[] = [
  transitions,
  icons,
  utilsTailwindHelpers,
  utilsGenerateUuid,
]
