<script setup lang="ts">
import { radioGroupIndicatorContainerVariants, radioGroupIndicatorVariants } from '@/components/radio/appRadioGroup.style'

interface Props {
  isActive?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
}
const {
  isChecked = false,
} = defineProps<Props>()
</script>

<template>
  <div
    :class="
      radioGroupIndicatorContainerVariants({
        isInvalid,
      })"
  >
    <div
      :class="radioGroupIndicatorVariants({
        isChecked,
      })"
    />
  </div>
</template>
