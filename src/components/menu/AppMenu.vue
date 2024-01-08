<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import AppMenuButton from '@/components/menu/AppMenuButton.vue'
import AppMenuContainer from '@/components/menu/AppMenuContainer.vue'
import AppMenuDivider from '@/components/menu/AppMenuDivider.vue'
import type { MenuItemProps } from '@/components/menu/AppMenuItem.vue'
import AppMenuItem from '@/components/menu/AppMenuItem.vue'
import AppMenuPanel from '@/components/menu/AppMenuPanel.vue'

const menuItems: MenuItemProps[] = [
  {
    text: 'hey',
    description: 'blabla',
    iconLeft: 'checkmark',
    iconRight: 'clock',
    isDisabled: false,
  },
  {
    text: 'hey2',
    description: 'blabla',
    iconLeft: 'clock',
    iconRight: 'edit',
    isDisabled: false,
  },
]
</script>

<template>
  <AppMenuContainer>
    <AppMenuButton>
      Button
    </AppMenuButton>
    <AppMenuPanel>
      <div class="px-4 py-2">
        I am user
      </div>
      <AppMenuItem v-for="menuItem in menuItems" :key="menuItem.text" v-bind="menuItem">
        blabla
      </AppMenuItem>
      <AppMenuDivider />
      <AppMenuItem v-for="menuItem in menuItems" :key="menuItem.text" v-bind="menuItem">
        blabla
      </AppMenuItem>
    </AppMenuPanel>
  </AppMenuContainer>
</template>
