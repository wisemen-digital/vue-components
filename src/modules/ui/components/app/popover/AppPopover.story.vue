<script setup lang="ts">
import type { Placement } from '@floating-ui/dom'

const placementOptions: Placement[] = [
  'bottom-start',
  'bottom-end',

  'top-start',
  'top-end',

  'left-start',
  'left-end',

  'right-start',
  'right-end',

  'bottom',
  'top',
  'left',
  'right',

]

interface State {
  arrow: number
  flip: number
  shift: number
  offset: number
  placement: Placement
}

const state = reactive<State>({
  arrow: 0,
  flip: 0,
  shift: 0,
  offset: 4,
  placement: 'bottom-start',
})
</script>

<template>
  <Story
    title="App/Popover/AppPopover"
  >
    <Variant title="Default">
      <template #controls>
        <HstNumber v-model="state.arrow" title="Arrow" />
        <HstNumber v-model="state.flip" title="Flip" />
        <HstNumber v-model="state.shift" title="Shift" />
        <HstNumber v-model="state.offset" title="Offset" />

        <HstSelect v-model="state.placement" :options="placementOptions" title="Placement" />
      </template>

      <AppPopover v-bind="state">
        <template #element>
          <AppButton>
            Dropdown
          </AppButton>
        </template>
        <template #panel="{ close }">
          <AppButton @component:click="close">
            Close panel
          </AppButton>
        </template>
      </AppPopover>
    </Variant>
  </Story>
</template>
