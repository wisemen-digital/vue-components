import { ComponentName, ComponentType } from '../../componentsTypes'

export const appHeightTransition = {
  component: ComponentName.TRANSITION_HEIGHT,
  name: 'AppHeightTransition',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/transitions/AppHeightTransition.vue',
      folder: 'transitions',
    },
  ],
}
