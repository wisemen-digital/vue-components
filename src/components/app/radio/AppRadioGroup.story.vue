<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppRadioGroup from './AppRadioGroup.vue'

interface State {
  isDisabled?: boolean
  options: Array<unknown>
  optionLabel: string
  optionValue: string
}

const model = ref<unknown>()

const state: State = reactive({
  isDisabled: false,
  options: [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
  ],
  optionLabel: 'label',
  optionValue: 'value',
})
</script>

<template>
  <Story
    title="App/Radio/AppRadioGroup"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Group Disabled" />
      </template>

      <div class="grid h-20 w-20 place-items-center">
        <AppRadioGroup v-bind="state" v-model="model" />
      </div>
      <p>
        Model: {{ model }}
      </p>
    </Variant>
  </Story>
</template>
