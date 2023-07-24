import { tailwindConfig } from './components/config/tailwindConfig'
import { globalPackages } from './components/config/globalPackages'

import type { Component } from './componentsTypes'

export const globalConfig: Component[] = [
  tailwindConfig,
  globalPackages,
]
