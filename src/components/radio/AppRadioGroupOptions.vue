<script setup lang="ts" generic="T">
import {
  RadioGroupOption,
} from '@headlessui/vue'
import { ref, watch } from 'vue'

interface Props {
  /**
   * List of possible items.
   */
  items: NonNullable<T>[]

  /**
   * Key of the value for disabled state.
   */
  disabledKey?: keyof NonNullable<T>
}
const {
  items,
  disabledKey,
} = defineProps<Props>()

function isDisabled(item: NonNullable<T>): boolean {
  if (disabledKey)
    return !!item[disabledKey]

  return false
}
</script>

<template>
  <div>
    <RadioGroupOption
      v-for="(item, index) in items"
      v-slot="{ active, checked, disabled }"
      :key="index"
      :disabled="isDisabled(item)"
      :value="(item as any)"
    >
      <slot
        :item="item"
        :is-active="active"
        :is-checked="checked"
        :is-disabled="disabled"
      />
    </RadioGroupOption>
  </div>
</template>
