<!-- eslint-disable vue/valid-v-model -->
<script setup lang="ts" generic="T, TValue extends keyof T">
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import type { RadioProps } from './appRadio.style'
import AppRadioOption from './AppRadioOption.vue'

interface Props {
  isDisabled?: boolean
  options: Array<T>
  optionLabel?: TValue
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  variant?: RadioProps['variant']
}

const {
  isDisabled = false,
  options = [],
  variant = 'default',
} = defineProps<Props>()

const model = defineModel<T[keyof T]>()
</script>

<template>
  <!-- eslint-disable-next-line vue/valid-v-model -->
  <RadioGroup v-model="(model as any)" :disabled="isDisabled" class="flex flex-col gap-3">
    <RadioGroupLabel>
      <slot name="label" />
    </RadioGroupLabel>

    <slot
      name="group"
      :group-disabled="isDisabled"
      :variant="variant"
      :options="options"
    >
      <div class="flex flex-col gap-6">
        <RadioGroupOption
          v-for="(option, index) in options"
          :key="`${index}`"
          v-slot="{ active, checked, disabled }"
          :value="(option as any)[optionValue]"
          class="outline-none"
          :disabled="(option as any)[optionDisabled]"
        >
          <slot
            name="item"
            :active="active"
            :checked="checked"
            :disabled="disabled"
            :option="option"
          >
            <AppRadioOption
              v-bind="{
                option: option as any,
                optionLabel,
                optionValue,
                optionDescription,
                optionDisabled,
                variant,
                checked,
                active,
                disabled,
              }"
            />
          </slot>
        </RadioGroupOption>
      </div>
    </slot>
  </RadioGroup>
</template>
