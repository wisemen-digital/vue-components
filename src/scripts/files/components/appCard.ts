import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appCard: Component = {
  component: ComponentName.APP_CARD,
  name: 'Card',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCard.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardContent.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardDescription.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardFooter.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardHeader.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardHeaderImage.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCardTitle.vue',
      folder: 'card',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/card/AppCard.story.vue',
      folder: 'card',
    },
  ],
  internalDependencies: [],
  dependencies: [],
}
