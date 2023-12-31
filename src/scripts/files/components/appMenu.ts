import type { Component } from '../../componentsTypes'
import { ComponentName, ComponentType } from '../../componentsTypes'

export const appMenu: Component = {
  component: ComponentName.APP_MENU,
  name: 'Menu',
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenu.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenuButton.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenuContainer.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenuDivider.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenuItem.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/AppMenuPanel.vue',
      folder: 'menu',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/menu.type.ts',
      folder: '',
    },
    {
      type: ComponentType.TYPES,
      path: './src/types/float.type.ts',
      folder: '',
    },
    {
      type: ComponentType.COMPONENTS,
      path: './src/components/menu/appMenuItem.style.ts',
      folder: 'menu',
    },
  ],
  internalDependencies: [ComponentName.APP_BUTTON, ComponentName.APP_TEXT],
  dependencies: ['@headlessui/vue', '@headlessui-float/vue'],
}
