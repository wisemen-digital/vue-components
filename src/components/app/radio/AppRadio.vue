<script setup lang="ts">
interface Props {
  isDisabled?: boolean
  option: unknown
  optionLabel: string
  optionValue: string
  id: string
}

const {
  isDisabled = false,
  option = null,
  optionLabel = 'label',
  optionValue = 'value',
} = defineProps<Props>()

const model = defineModel<unknown>()
</script>

<template>
  <div class="flex gap-2">
    <input
      :id="id"
      v-model="model"
      :disabled="isDisabled"
      type="radio"
      :value="option[optionValue]"
    >
    <label
      :class="{
        'cursor-pointer': !isDisabled,
      }"
      :for="id"
    >
      {{ option[optionLabel] }}
    </label>
  </div>
</template>
