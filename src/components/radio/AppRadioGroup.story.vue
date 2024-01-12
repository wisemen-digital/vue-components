<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ZodFormattedError } from 'zod'
import AppFormRadioGroup from '@/components/radio/AppFormRadioGroup.vue'
import AppRadioGroup from '@/components/radio/AppRadioGroup.vue'

interface RadioOption {
  label: string
  value: string
  description: string
  isDisabled?: boolean
}
const radioOptions: RadioOption[] = [
  {
    label: 'Option 1',
    value: 'option1',
    description: 'Description 1',
    isDisabled: true,
  },
  {
    label: 'Option 2',
    value: 'option2',
    description: 'Description 2',
  },
  {
    label: 'Option 3',
    value: 'option3',
    description: 'Description 3',
  },
]
const radioOption = ref<RadioOption | null>(null)

interface State {
  isInvalid: boolean
  isDisabled: boolean
  description: string
  label: string
}

const state: State = reactive({
  isDisabled: false,
  isInvalid: false,
  description: 'Description',
  label: 'Label',
})
</script>

<template>
  <Story title="Radio/AppRadioGroup">
    <Variant title="Default">
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isInvalid" title="Invalid" />
        <HstText v-model="state.label" title="Label" />
      </template>

      <div class="flex flex-col justify-start gap-20 py-20">
        <AppRadioGroup
          v-model="radioOption"
          v-bind="state"
          :items="radioOptions"
          disabled-key="isDisabled"
          description-key="description"
          label-key="label"
          by="value"
        />
      </div>
    </Variant>
  </Story>
</template>
