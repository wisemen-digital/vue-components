<script setup lang="ts" generic="T">
import { formSelectOptionVariants } from './formSelectVariants'
import type { FormSelectOptionProps } from './formSelectVariants'

interface Props {
  value: T
  isActive?: boolean
  isSelected?: boolean
  isDisabled?: boolean
  displayFunction: (value: T) => string
}

const {
  value,
  isActive = false,
  isSelected = false,
  isDisabled = false,
  displayFunction,
} = defineProps<Props>()

const optionStatus = computed<FormSelectOptionProps['variant']>(() => {
  if (isDisabled)
    return 'disabled'
  else if (isSelected)
    return 'selected'
  else if (isActive)
    return 'active'
  else
    return 'default'
})
</script>

<template>
  <button :class="formSelectOptionVariants({ variant: optionStatus })">
    {{ displayFunction(value as T) }}
  </button>
</template>
