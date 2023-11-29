import { tailwindConfig } from './files/config/tailwindConfig'
import { globalPackages } from './files/config/globalPackages'

import type { Component } from './componentsTypes'

export const globalConfig: Component[] = [
  tailwindConfig,
  globalPackages,
]
