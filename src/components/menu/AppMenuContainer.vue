<script setup lang="ts">
import { Float } from '@headlessui-float/vue'
import { Menu } from '@headlessui/vue'
import { popoverTransition } from '@/transitions'
import type { FloatProps } from '@/types/float.type'

const {
  placement = 'bottom-end',
  hasAdaptiveWidth = false,
  hasAutoPlacement = false,
  hasNoFlip = false,
  hasNoOffset = false,
  hasNoShift = false,
} = defineProps<FloatProps>()

const SHIFT_VALUE = 8
const OFFSET_VALUE = 4
const FLIP_VALUE = 8
</script>

<template>
  <Menu>
    <Float
      :placement="placement"
      :adaptive-width="hasAdaptiveWidth"
      :auto-placement="hasAutoPlacement"
      :flip="hasNoFlip ? undefined : FLIP_VALUE"
      :shift="hasNoShift ? undefined : SHIFT_VALUE"
      :offset="hasNoOffset ? undefined : OFFSET_VALUE"

      portal
      v-bind="popoverTransition"
      tailwindcss-origin-class
    >
      <slot />
    </Float>
  </Menu>
</template>
