<script setup lang="ts" generic="T, TValue extends keyof T">
import AppRadio from './AppRadio.vue'

interface Props {
  isDisabled?: boolean
  options: Array<T>
  optionLabel?: keyof T
  optionValue?: TValue
}

const {
  isDisabled = false,
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
} = defineProps<Props>()

const model = defineModel<T[keyof T]>()
</script>

<template>
  <div class="flex gap-6">
    <div
      v-for="(option, index) in options"
      :key="`${index}`"
    >
      <AppRadio
        v-model="model"
        :is-disabled="isDisabled"
        :option="option"
        :option-label="optionLabel"
        :option-value="optionValue"
      />
    </div>
  </div>
</template>
