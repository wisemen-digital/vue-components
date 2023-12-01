<script setup lang="ts" generic="T">
import {
  ComboboxOption,
  ComboboxOptions,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import AppHeightTransition from '@/components/transitions/AppHeightTransition.vue'
import { useAppSelectContext } from '@/composables/select/useAppSelectContext'

interface Props {
  items: T[]
  isOpen: boolean
}
defineProps<Props>()

const {
  isFilterable,
} = useAppSelectContext<T>()
</script>

<template>
  <ComboboxOptions v-if="isFilterable" class="rounded bg-card p-2">
    <AppHeightTransition>
      <div>
        <ComboboxOption
          v-for="(item, index) in items" v-slot="{ active, selected, disabled }" :key="index"
          :value="(item as any)"
        >
          <slot :item="item" :active="active" :selected="selected" :disabled="disabled" :is-open="isOpen" />
        </ComboboxOption>
      </div>
    </AppHeightTransition>
  </ComboboxOptions>
  <ListboxOptions v-else class="rounded bg-card p-2">
    <AppHeightTransition>
      <div>
        <ListboxOption
          v-for="(item, index) in items" v-slot="{ active, selected, disabled }" :key="index"
          :value="(item as any)"
        >
          <slot :item="item" :active="active" :selected="selected" :disabled="disabled" :is-open="isOpen" />
        </ListboxOption>
      </div>
    </AppHeightTransition>
  </ListboxOptions>
</template>
