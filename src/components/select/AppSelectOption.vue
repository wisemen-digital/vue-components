<script setup lang="ts" generic="T">
import { computed } from 'vue'
import { appSelectOptionVariants } from '@/components/select/appSelect.style'
import type { AppSelectOptionProps } from '@/components/select/appSelect.style'
import { useAppSelectContext } from '@/composables/select/useAppSelectContext'

interface Props {
  /**
   * The value of the option.
   */
  value: T

  /**
   * Determines if the option is active.
   */
  isActive?: boolean

  /**
   * Determines if the option is selected.
   */
  isSelected?: boolean

  /**
   * Determines if the option is disabled.
   */
  isDisabled?: boolean
}

const {
  value,
  isActive = false,
  isSelected = false,
  isDisabled = false,
} = defineProps<Props>()

const optionStatus = computed<AppSelectOptionProps['variant']>(() => {
  if (isDisabled)
    return 'disabled'
  else
    return 'default'
})

const { getDisplayValue } = useAppSelectContext()
</script>

<template>
  <button :class="appSelectOptionVariants({ variant: optionStatus, selected: isSelected, active: isActive })">
    {{ getDisplayValue(value) }}
  </button>
</template>
