<script setup lang="ts">
import type { Props as ButtonProps } from '@/components/button/AppButton.vue'
import AppMenuButton from '@/components/menu/AppMenuButton.vue'
import AppMenuContainer from '@/components/menu/AppMenuContainer.vue'
import AppMenuDivider from '@/components/menu/AppMenuDivider.vue'
import AppMenuItem from '@/components/menu/AppMenuItem.vue'
import AppMenuPanel from '@/components/menu/AppMenuPanel.vue'
import type { MenuConfiguration, MenuOption } from '@/types/menu.type'

defineProps<{
  /**
   * The menu configuration, which is an array of menu options.
   */
  menuConfiguration: MenuConfiguration
  /**
   * The button props, which are passed to the button component.
   */
  buttonProps?: ButtonProps
}>()
export type MenuItemComponent = typeof AppMenuItem | typeof AppMenuDivider
function getMenuConfigurationItem(type: MenuOption): MenuItemComponent {
  switch (type) {
    case 'divider':
      return AppMenuDivider
    case 'item':
      return AppMenuItem
  }
}
</script>

<template>
  <AppMenuContainer>
    <AppMenuButton v-bind="buttonProps">
      <slot />
    </AppMenuButton>
    <AppMenuPanel>
      <slot name="panel-top" />
      <Component
        :is="getMenuConfigurationItem(menuItem.type)"
        v-for="(menuItem, index) in menuConfiguration"
        :key="index"
        v-bind="menuItem"
      />
    </AppMenuPanel>
    <slot name="panel-bottom" />
  </AppMenuContainer>
</template>
