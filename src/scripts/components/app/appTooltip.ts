import { ComponentName, ComponentType } from '../../componentsTypes'

export const appTooltip = {
  component: ComponentName.APP_TOOLTIP,
  name: 'Tooltip',
  files: [{
    type: ComponentType.COMPONENTS,
    path: './src/modules/ui/components/app/tooltip/AppTooltip.vue',
    folder: 'app/tooltip',
  }],
  internalDependencies: [ComponentName.TRANSITIONS],
  dependencies: ['@floating-ui/dom', '@vueuse/core'],
}
