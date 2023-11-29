<script setup lang="ts" generic="T">
import { computed } from 'vue'
import { AppSelectOptionVariants } from '@/components/select/appSelect.style'
import type { AppSelectOptionProps } from '@/components/select/appSelect.style'
import { useAppSelectContext } from '@/composables/select/useAppSelectContext'

interface Props {
  value: T
  isActive?: boolean
  isSelected?: boolean
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
  <button :class="AppSelectOptionVariants({ variant: optionStatus, selected: isSelected, active: isActive })">
    {{ getDisplayValue(value) }}
  </button>
</template>
