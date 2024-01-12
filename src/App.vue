<script setup lang="ts">
import { ref } from 'vue'
import AppFormRadioGroup from '@/components/radio/AppFormRadioGroup.vue'

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
</script>

<template>
  <div class="p-20">
    <AppFormRadioGroup
      v-model="radioOption"
      is-touched
      :is-required="true"
      :is-invalid="true"
      label="dit is een label"
      :items="radioOptions"
      disabled-key="isDisabled"
      description-key="description"
      label-key="label"
      by="value"
    />
  </div>
</template>
