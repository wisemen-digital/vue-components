<script setup lang="ts" generic="TRouter  extends true | false | undefined = false">
import { computed, watch } from 'vue'
import type { RouteLocationRaw, RouteRecordRaw } from 'vue-router'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppTabsGroup from '@/components/tabs/AppTabsGroup.vue'
import AppTabsList from '@/components/tabs/AppTabsList.vue'
import AppTabsTab from '@/components/tabs/AppTabsTab.vue'
import type { Icon } from '@/icons'
import AppTabsPanels from '@/components/tabs/AppTabsPanels.vue'

export interface TabWithRoutes {
  label: string
  icon?: Icon
  to: RouteLocationRaw
}

export interface TabWithoutRoutes {
  label: string
  icon?: Icon
  to?: never
}

const { isRouter = false, tabs } = defineProps<Props<TRouter>>()

interface Props<THasRoutes> {
  isRouter?: THasRoutes
  tabs: THasRoutes extends true ? TabWithRoutes[] : TabWithoutRoutes[]
}

// Need this or it errors because of bad generics
const allTabs = computed(() => {
  return tabs
})

const selectedTab = defineModel<number>({
  local: true,
  default: 0,
})

function changeTab(index: number): void {
  selectedTab.value = index
}

function isActive(index: number): boolean {
  return selectedTab.value === index
}

const tabComponent = computed(() => {
  return isRouter ? RouterLink : 'button'
})

const isUsingRouter = computed<boolean>(() => {
  // @ts-expect-error Generics in Vue SFCs are not supported yet
  return !!isRouter || isRouter === ''
})

// Router logic
const route = useRoute()
watch(() => route.path, () => {
  if (!isUsingRouter.value)
    return

  const tab = (allTabs.value as TabWithRoutes[]).find((tab) => {
    return route.matched.find((route) => {
      return tab.to === route.path
    })
  })
  if (tab)
    selectedTab.value = allTabs.value.indexOf(tab)
})
</script>

<template>
  <AppTabsGroup :selected-index="selectedTab" as="div" @change="changeTab">
    <AppTabsList>
      <AppTabsTab
        :is="tabComponent"
        v-for="(tab, index) in allTabs"
        :key="index"
        :to="(tab as TabWithRoutes)?.to ?? undefined"
        :is-active="isActive(index)"
      >
        <div class="flex w-full min-w-max items-center justify-center space-x-2 text-center">
          <span class="flex-none">{{ tab.label }}</span>
          <AppIcon v-if="tab.icon" class="flex-none" :icon="tab.icon" />
        </div>
      </AppTabsTab>
    </AppTabsList>
    <AppTabsPanels>
      <slot v-if="!isUsingRouter" />
      <RouterView v-else />
    </AppTabsPanels>
  </AppTabsGroup>
</template>
