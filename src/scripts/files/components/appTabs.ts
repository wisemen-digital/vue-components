import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appTabs: Component = {
  component: ComponentName.APP_TABS,
  name: 'Tabs',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabs.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabsGroup.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabsList.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabsPanel.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabsPanels.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/AppTabsTab.vue',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/tabs/appTabs.style.ts',
      folder: 'tabs',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: './src/composables/tabs/useTabsQuery.ts',
      folder: 'tabs',
    },
  ],
  internalDependencies: [],
  dependencies: ['@vueuse/router'],
}
