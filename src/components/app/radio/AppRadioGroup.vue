<script setup lang="ts">
import AppRadio from './AppRadio.vue'

interface Props {
  isDisabled?: boolean
  options: Array<unknown>
  optionLabel: string
  optionValue: string
}

const {
  isDisabled = false,
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
} = defineProps<Props>()

const model = defineModel<unknown>()
</script>

<template>
  <div class="flex gap-6">
    <div
      v-for="(option, index) in options"
      :key="`${index}`"
    >
      <AppRadio
        :id="`radio_${index}`"
        v-model="model"
        :is-disabled="isDisabled"
        :option="option"
        :option-label="optionLabel"
        :option-value="optionValue"
      />
    </div>
  </div>
</template>
