<script setup lang="ts" generic="T, TValue extends keyof T, TValueType extends T[TValue]">
import { generateUuid } from '@/utils/uuid/generateUuid'

interface Props {
  isDisabled?: boolean
  option: T
  optionLabel?: keyof T
  optionValue?: TValue
  color?: 'primary | secondary | destructive | accent'
}

const {
  isDisabled = false,
  option = null,
  optionLabel = 'label',
  optionValue = 'value',
  color = 'primary',
} = defineProps<Props>()

const model = defineModel<TValueType>()
const uuid = generateUuid()
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      :id="uuid"
      v-model="model"
      :disabled="isDisabled"
      type="radio"
      :value="option[optionValue]"
      class="h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-muted-foreground transition"
      :class="`hover:border-${color}-foreground checked:bg-${color}-foreground`"
    >

    <!-- <div class="h-4 w-4 rounded-full bg-primary-foreground" /> -->
    <label
      :class="{
        'cursor-pointer': !isDisabled,
      }"
      :for="uuid"
    >
      {{ option[optionLabel] }}
    </label>
  </div>
</template>
