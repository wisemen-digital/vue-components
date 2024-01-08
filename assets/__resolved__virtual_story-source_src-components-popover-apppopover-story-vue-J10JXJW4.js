const __resolved__virtual_storySource_srcComponentsPopoverApppopoverStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import type { PopoverProps } from '@/components/popover/AppPopover.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppButton from '@/components/button/AppButton.vue'

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
<\/script>

<template>
  <Story
    title="Popover/AppPopover"
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
        <AppPopover v-bind="state">
          <template #element>
            <AppButton as="div" variant="default">
              Button
            </AppButton>
          </template>
          <template #panel>
            <AppButton>
              Interactable element
            </AppButton>
            <AppButton>
              Second interactable element
            </AppButton>
            <div class="max-w-[60ch]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit quo cumque soluta, repudiandae impedit at vitae culpa iste ad placeat quaerat nihil? Velit, eligendi ullam molestiae eum ipsum totam?
            </div>
          </template>
        </AppPopover>
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcComponentsPopoverApppopoverStoryVue as default
};
