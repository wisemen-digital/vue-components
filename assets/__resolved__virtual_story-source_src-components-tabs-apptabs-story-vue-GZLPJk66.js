const __resolved__virtual_storySource_srcComponentsTabsApptabsStoryVue = `<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TabWithoutRoutes } from '@/components/tabs/AppTabs.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import AppTabsPanel from '@/components/tabs/AppTabsPanel.vue'

const selectedTab = ref(2)

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
<\/script>

<template>
  <Story
    title="Tabs/AppTabs"
  >
    <Variant title="Default" auto-props-disabled>
      <div class="p-8">
        <AppTabs
          v-model="selectedTab"
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
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsTabsApptabsStoryVue as default
};
