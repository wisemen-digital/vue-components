<script setup lang="ts" generic="T">
import { twMerge } from 'tailwind-merge'
import { formSelectOptionVariants } from '@/components/form/select/formSelect.style'
import type { FormSelectOptionProps } from '@/components/form/select/formSelect.style'

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
  else
    return 'default'
})
</script>

<template>
  <button :class="twMerge(formSelectOptionVariants({ variant: optionStatus, selected: isSelected, active: isActive }))">
    {{ displayFunction(value as T) }}
  </button>
</template>
