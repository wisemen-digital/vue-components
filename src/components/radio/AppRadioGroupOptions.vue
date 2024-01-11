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

// Watch if any child of RadioGroupOption is active
// A child is active if it data-headlessui-state="checked"

// const radioGroupElement = ref<typeof RadioGroupOption[] | null>(null)
// watch(
//   () => radioGroupElement.value,
//   () => {
//     console.log('radioGroupElement', radioGroupElement.value)
//     if (radioGroupElement.value) {
//       const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//           if (mutation.type === 'attributes') {
//             const { target } = mutation
//             const { attributes } = target as Element
//             const isActive = Array.from(attributes).some(
//               attribute => attribute.name === 'data-headlessui-state' && attribute.value === 'checked',
//             )
//             console.log('isActive', isActive)
//           }
//         })
//       })
//       observer.observe(radioGroupElement.value, {
//         attributes: true,
//       })
//     }
//   },
// )
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
