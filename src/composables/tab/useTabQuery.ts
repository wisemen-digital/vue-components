import type { Ref } from 'vue'
import { watch } from 'vue'
import { useRouteQuery } from '@vueuse/router'

export interface TabQueryParams {
  tabId?: string | null
  selectedTab: Ref<number | null>
}

export function useTabQuery({ tabId = null, selectedTab }: TabQueryParams): void {
  const query = useRouteQuery<string>(`tab-${tabId ?? 'default'}`)
  let isInitialized = false
  if (query !== null)
    selectedTab.value = Number(query.value)

  const setTabQuery = (value: number | null): void => {
    query.value = value?.toString() ?? ''
  }

  watch(query, (value) => {
    if (value === null)
      return
    isInitialized = true
    selectedTab.value = Number(value)
  }, { immediate: true })

  watch(selectedTab, (value) => {
    if (!isInitialized)
      return
    setTabQuery(value)
  })
}
