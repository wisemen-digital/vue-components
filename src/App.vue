<script setup lang="ts">
import { computed } from 'vue'
import type { TabWithoutRoutes } from '@/components/tabs/AppTabs.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppTabsPanel from '@/components/tabs/AppTabsPanel.vue'

const tabs = computed<TabWithoutRoutes[]>(() => [
  {
    label: 'Tab 1',
    icon: 'eye',
  },
  {
    label: 'Tab 2',
    icon: 'eye',
  },
  {
    label: 'Tab 3',
    icon: 'eye',
  },
])
</script>

<template>
  <AppTabs
    :tabs="tabs"
  >
    <AppTabsPanel>
      <div class="p-4">
        Tab 1
      </div>
    </AppTabsPanel>
    <AppTabsPanel>
      <div class="p-4">
        Tab 2
      </div>
    </AppTabsPanel>
    <AppTabsPanel>
      <div class="p-4">
        Tab 2
      </div>
    </AppTabsPanel>
  </AppTabs>

  <!-- <RouterView /> -->
</template>
