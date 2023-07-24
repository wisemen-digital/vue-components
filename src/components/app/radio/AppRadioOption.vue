<!-- eslint-disable vue/valid-v-model -->
<script setup lang="ts" generic="T, TValue extends T">
import {
  RadioGroupDescription,
  RadioGroupLabel,
} from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import type { RadioProps } from './appRadio.style'
import { radioButtonVariants, radioVariants } from './appRadio.style'

interface Props {
  option: T
  optionLabel?: TValue
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  variant?: RadioProps['variant']
  checked: boolean
  active: boolean
  disabled: boolean
}

const {
  option = {},
  variant = 'default',
} = defineProps<Props>()
</script>

<template>
  <div
    :class="twMerge(radioVariants({ variant, isChecked: checked, isActive: active, isDisabled: disabled }))"
  >
    <div>
      <RadioGroupLabel class="text-body font-medium">
        {{ (option as any)[optionLabel] }}
      </RadioGroupLabel>

      <RadioGroupDescription class="text-subtext">
        {{ (option as any)[optionDescription] }}
      </RadioGroupDescription>
    </div>

    <div
      :class="twMerge(radioButtonVariants({ isChecked: checked, isActive: active && !checked }))"
    >
      <!-- TODO: Update svg once AppIcon is merged -->
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
</template>
