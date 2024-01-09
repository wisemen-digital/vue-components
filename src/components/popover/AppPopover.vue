<script setup lang="ts">
import { Float } from '@headlessui-float/vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { popoverTransition } from '@/transitions'
import type { FloatProps } from '@/types/float.type'

export interface PopoverProps extends FloatProps {
  /**
   * Decides if the popover state is managed from the outside.
   */
  isManual?: boolean
  /**
   * Decides if the popover element is a div or a button.
   */
  isDiv?: boolean
}

const {
  placement = 'bottom',
  hasAdaptiveWidth = false,
  hasAutoPlacement = false,
  hasNoFlip = false,
  hasNoOffset = false,
  hasNoShift = false,
  isDiv = false,
  isManual = false,
} = defineProps<PopoverProps>()

const SHIFT_VALUE = 8
const OFFSET_VALUE = 4
const FLIP_VALUE = 8

const isOpen = defineModel<boolean>({
  default: false,
})

function closeManual(): void {
  isOpen.value = false
}
</script>

<template>
  <Popover>
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
      <PopoverButton :as="isDiv ? 'div' : 'button'" class="max-w-max rounded-button">
        <slot name="element" />
      </PopoverButton>

      <PopoverPanel
        v-if="!isManual"
        v-slot="{ close }"
        :focus="true"
        class="rounded-popover border border-border bg-popover px-4 py-3 text-popover-foreground shadow-popover-shadow"
      >
        <slot name="panel" :close="close" />
      </PopoverPanel>
      <PopoverPanel
        v-else
        v-show="isOpen"
        :focus="true"
        static
        class="rounded-popover border border-border bg-popover px-4 py-3 text-popover-foreground shadow-popover-shadow"
      >
        <slot name="panel" :close="closeManual" />
      </PopoverPanel>
    </Float>
  </Popover>
</template>
