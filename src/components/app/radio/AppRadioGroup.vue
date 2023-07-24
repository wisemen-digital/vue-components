<script setup lang="ts" generic="T, TValue extends keyof T">
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import type { RadioProps } from './appRadio.style'
import { radioButtonVariants, radioVariants } from './appRadio.style'

interface Props {
  isDisabled?: boolean
  groupLabel?: string
  options: Array<T>
  optionLabel?: keyof T
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  variant?: RadioProps['variant']
}

const {
  isDisabled = false,
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
  optionDescription = 'description',
  optionDisabled = 'isDisabled',
  variant = 'default',
} = defineProps<Props>()

const model = defineModel<T[keyof T]>()
</script>

<template>
  <RadioGroup v-model="model" :disabled="isDisabled" class="flex flex-col gap-3">
    <RadioGroupLabel v-if="groupLabel" class="text-heading">
      {{ groupLabel }}
    </RadioGroupLabel>

    <div class="flex flex-col gap-6">
      <RadioGroupOption
        v-for="(option, index) in options"
        :key="`${index}`"
        v-slot="{ active, checked, disabled }"
        :value="option[optionValue]"
        class="outline-none"
        :disabled="option[optionDisabled]"
      >
        <div
          :class="twMerge(radioVariants({ variant, isChecked: checked, isActive: active, isDisabled: disabled }))"
        >
          <div>
            <RadioGroupLabel class="text-body font-medium">
              {{ option[optionLabel] }}
            </RadioGroupLabel>

            <RadioGroupDescription class="text-subtext">
              {{ option[optionDescription] }}
            </RadioGroupDescription>
          </div>

          <div
            :class="twMerge(radioButtonVariants({ isChecked: checked, isActive: active && !checked }))"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="12"
                fill="currentColor"
                fill-opacity="0.2"
              />
              <path
                d="M7 13l3 3 7-7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
