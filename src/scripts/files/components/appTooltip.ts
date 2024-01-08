import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appTooltip: Component = {
  component: ComponentName.APP_TOOLTIP,
  name: 'Tooltip',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tooltip/AppTooltip.vue',
      folder: 'tooltip',
    },
  ],
  internalDependencies: [ComponentName.APP_POPOVER],
}
