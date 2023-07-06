<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppRadio from './AppRadio.vue'

interface State {
  isDisabled?: boolean
  option: unknown
  optionLabel: string
  optionValue: string
  id: string
}

const model = ref<unknown>()

const state1: State = reactive({
  isDisabled: false,
  option: {
    label: '1',
    value: 1,
  },
  optionLabel: 'label',
  optionValue: 'value',
  id: 'radio_0',
})

const state2: State = reactive({
  isDisabled: false,
  option: {
    label: '2',
    value: 2,
  },
  optionLabel: 'label',
  optionValue: 'value',
  id: 'radio_1',
})
</script>

<template>
  <Story
    title="App/Radio/AppRadio"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state1.isDisabled" title="Option 1 Disabled" />
        <HstCheckbox v-model="state2.isDisabled" title="Option 2 Disabled" />
      </template>

      <div class="grid h-20 w-20 place-items-center">
        <AppRadio v-bind="state1" v-model="model" />
        <AppRadio v-bind="state2" v-model="model" />
      </div>
      <p>
        Model: {{ model }}
      </p>
    </Variant>
  </Story>
</template>
