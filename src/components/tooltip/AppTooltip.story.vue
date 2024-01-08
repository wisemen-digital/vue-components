<script setup lang="ts">
import { reactive } from 'vue'
import type { PopoverProps } from '@/components/popover/AppPopover.vue'
import AppButton from '@/components/button/AppButton.vue'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

defineProps<PopoverProps>()

const state: PopoverProps = reactive({
  hasAdaptiveWidth: false,
  hasNoOffset: false,
  hasNoShift: false,
  hasAutoPlacement: false,
  hasNoFlip: false,
  placement: 'bottom',
})

const placementOptions = [
  'bottom',
  'bottom-start',
  'bottom-end',
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
]
</script>

<template>
  <Story
    title="Tooltip/AppTooltip"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.hasAdaptiveWidth" title="Adaptive width" />
        <HstCheckbox v-model="state.hasAutoPlacement" title="Auto placement" />
        <HstCheckbox v-model="state.hasNoFlip" title="No flip" />
        <HstCheckbox v-model="state.hasNoShift" title="No shift" />
        <HstCheckbox v-model="state.hasNoOffset" title="No offset" />

        <HstSelect v-model="state.placement" title="Placement" :options="placementOptions" />
      </template>
      <div>
        <AppTooltip v-bind="state">
          <template #element>
            <AppButton variant="default">
              Button
            </AppButton>
          </template>
          <template #panel>
            <div class="max-w-60">
              <AppButton>
                Interactable element
              </AppButton>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus, saepe excepturi dolor maiores ut molestias sapiente enim corporis animi praesentium dolore ducimus ipsa suscipit, nihil laboriosam autem quam deleniti?
            </div>
          </template>
        </AppTooltip>
      </div>
    </Variant>
  </Story>
</template>
