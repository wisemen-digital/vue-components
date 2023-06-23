<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { Float, FloatArrow } from '@headlessui-float/vue'
import type { DetectOverflowOptions, FlipOptions, OffsetOptions, Placement, ShiftOptions } from '@floating-ui/dom'

interface Props {
  placement?: Placement
  transitionName?: string
  offset?: OffsetOptions
  arrow?: boolean | number
  flip?: boolean | number | Partial<FlipOptions & DetectOverflowOptions>
  shift?: boolean | number | Partial<ShiftOptions & DetectOverflowOptions>
}

const {
  flip = true,
  shift = true,
  placement = 'bottom-start',
  transitionName = 'float',
  arrow = true,
  offset,
} = defineProps<Props>()
</script>

<template>
  <Popover>
    <Float
      :flip="flip"
      :shift="shift"
      :placement="placement"
      :transition-name="transitionName"
      :arrow="arrow"
      :offset="offset ?? arrow ? 15 : 4"
    >
      <PopoverButton>
        <slot name="element" />
      </PopoverButton>

      <PopoverPanel v-slot="{ close }">
        <div v-if="arrow" class="absolute -z-10 h-full w-full rounded bg-card shadow-modal" />

        <FloatArrow v-if="arrow" class="absolute -z-10 h-5 w-5 rotate-45 bg-card shadow-modal" />
        <div class="z-50 flex flex-col gap-2 rounded bg-card p-4 shadow-modal">
          <slot name="panel" :close="close" />
        </div>
      </PopoverPanel>
    </Float>
  </Popover>
</template>
