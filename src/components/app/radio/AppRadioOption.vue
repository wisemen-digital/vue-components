<!-- eslint-disable vue/valid-v-model -->
<script setup lang="ts" generic="T, TValue extends T">
import {
  RadioGroupDescription,
  RadioGroupLabel,
} from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import AppIcon from '../icon/AppIcon.vue'
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
      <AppIcon
        size="default"
        icon="cirlcedCheckmark"
      />
    </div>
  </div>
</template>
