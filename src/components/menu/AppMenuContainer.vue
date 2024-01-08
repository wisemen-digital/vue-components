<script setup lang="ts">
import { Float, type FloatProps } from '@headlessui-float/vue'
import { Menu } from '@headlessui/vue'
import { popoverTransition } from '@/transitions'

export interface MenuProps {
  placement?: FloatProps['placement']

  hasAdaptiveWidth?: FloatProps['adaptiveWidth']
  hasNoOffset?: boolean
  hasNoShift?: boolean
  hasNoFlip?: boolean
  hasAutoPlacement?: boolean

  isManual?: boolean
  isDiv?: boolean
}

const {
  placement = 'bottom',

  hasAdaptiveWidth = false,
  hasAutoPlacement = false,
  hasNoFlip = false,
  hasNoOffset = false,
  hasNoShift = false,
} = defineProps<MenuProps>()

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
