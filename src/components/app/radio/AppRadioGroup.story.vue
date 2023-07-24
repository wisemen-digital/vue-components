<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppRadioGroup from './AppRadioGroup.vue'
import { type RadioProps, radioVariantOptions } from './appRadio.style'

interface Option {
  label: string
  description: string
  value: number
  isDisabled: boolean
}

interface State {
  isDisabled?: boolean
  groupLabel?: string
  options: Option[]
  optionLabel?: keyof Option
  optionValue?: keyof Option
  optionDescription?: keyof Option
  optionDisabled?: keyof Option
  variant?: RadioProps['variant']
}

const model = ref<number>(0)

const state: State = reactive({
  isDisabled: false,
  groupLabel: 'Options',
  options: [
    {
      label: 'Option n°1',
      description: 'Description regarding option n°1. Best option to choose.',
      value: 1,
      isDisabled: false,
    },
    {
      label: 'Option n°2',
      description: 'Description regarding option n°2. Second best option to choose.',
      value: 2,
      isDisabled: false,
    },
    {
      label: 'Option n°3',
      description: 'Description regarding option n°3',
      value: 3,
      isDisabled: true,
    },
  ],
  optionLabel: 'label',
  optionValue: 'value',
  optionDescription: 'description',
  optionDisabled: 'isDisabled',
  variant: 'default',
})
</script>

<template>
  <Story
    title="App/Radio/AppRadioGroup"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstText v-model="state.groupLabel" title="Group label" />
        <HstSelect v-model="state.variant" title="Variant" :options="radioVariantOptions" />
        <HstJson v-model="state.options" title="Options object" />
      </template>

      <div class="mb-4 grid place-items-start">
        <AppRadioGroup
          v-model="model"
          v-bind="state"
        >
          <template #label>
            <span class="text-heading">{{ state.groupLabel }}</span>
          </template>
        </AppRadioGroup>
      </div>
      <p>
        Model: {{ model }}
      </p>
    </Variant>
  </Story>
</template>
